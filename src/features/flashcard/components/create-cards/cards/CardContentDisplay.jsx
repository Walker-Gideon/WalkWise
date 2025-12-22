import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import { RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";

import ConfirmDelete from "/src/components/ConfirmDelete";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import useDeleteFlashcard from "../../../hooks/useDeleteFlashcard";
import { useFlashcard } from "../../../context/FlashcardContext";
import useFormattedDate from "/src/hook/useFormattedDate";
import { useFetchCards } from "/src/hook/useCards";

export default function CardContentDisplay() {
  const { setActiveId, setIsPlay, query, sort } = useFlashcard();
  const { flashcards, isPending, error } = useFetchCards();
  const { isDeleting, deleteFlashcard } = useDeleteFlashcard();

  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [searchParams] = useSearchParams();

  // Search
  useEffect(() => {
    if (query) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [query]);

  // 1. Filter
  const filterValue = searchParams.get("sort") || "title";

  const sortCards = (a, b) => {
    const normalizeDate = (d) => (d?.toDate ? d.toDate() : new Date(d || 0));

    if (filterValue === "title") return a.title.localeCompare(b.title);
    if (filterValue === "count") return b.pairs.length - a.pairs.length;
    if (filterValue === "time")
      return normalizeDate(b.createdAt) - normalizeDate(a.createdAt);
    return 0;
  };

  const filteredFlashcards = flashcards
    ?.filter((card) => card.title.toLowerCase().includes(query.toLowerCase()))
    ?.sort(sortCards);

  function handleDeleteClick(id, title) {
    setSelectedId(id);
    setSelectedCardTitle(title);
    setIsDeleteModal(true);
  }

  function handleCloseModal() {
    setIsDeleteModal(false);
    setSelectedId(null);
    setSelectedCardTitle("");
  }

  function handleConfirmDelete() {
    if (selectedId) {
      deleteFlashcard(selectedId);
      handleCloseModal();
    }
  }

  function handlePlayClick(id) {
    setActiveId(id);
    setIsPlay(true);
  }

  return (
    <>
      {(isPending || isSearching) && <Spinner />}
      <Container adjust={true} classname={"md:px-8 lg:mx-auto lg:max-w-5xl"}>
        {!isSearching &&
          filteredFlashcards?.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              numOfCards={card.pairs.length}
              handleDelete={() => handleDeleteClick(card.id, card.title)}
              handlePlay={() => handlePlayClick(card.id)}
              timing={card.createdAt}
            />
          ))}
      </Container>
      {isDeleteModal && (
        <ConfirmDelete
          resourceName={selectedCardTitle}
          disabled={isDeleting}
          onCloseModal={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {!isSearching && filteredFlashcards?.length === 0 && (
        <Flex variant="center" classname={"h-80"}>
          <Paragraph classname={"text-center primary-text-color"}>
            No flashcards found
          </Paragraph>
        </Flex>
      )}
      {error && toast.error("Error fetching flashcards")}
    </>
  );
}

function Cards({ title, numOfCards, handleDelete, handlePlay, timing }) {
  const createdExact = useFormattedDate(timing);

  return (
    <Card
      classname={
        "cursor-pointer group flex gap-4 mb-4 mt-1 shadow-md transition-all duration-300 ease-in-out"
      }
    >
      <div
        className={`h-4 w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700`}
      ></div>

      <Group classname={"w-full"}>
        <Flex variant="between" classname={"mb-4"}>
          <HeaderText classname={" primary-text-color"}>{title}</HeaderText>

          <Flex classname={"gap-2"}>
            <Button
              type="colors"
              classname={"opacity-0 group-hover:opacity-100"}
              onclick={handleDelete}
            >
              <RiDeleteBin5Line className={"h-4 w-4"} />
            </Button>
            <Button
              type="colors"
              classname={"opacity-0 group-hover:opacity-100"}
              onclick={handlePlay}
            >
              <LuPlay className={"h-4 w-4"} />
            </Button>
          </Flex>
        </Flex>

        <Flex variant="between">
          <Paragraph type="xs" classname={"secondary-text-color"}>
            {numOfCards} card{numOfCards === 1 ? "" : "s"}
          </Paragraph>

          <Paragraph
            variant="small"
            classname={
              "flex items-center text-nowrap secondary-text-color gap-1"
            }
          >
            <GoDotFill className="h-3 w-3" /> {createdExact}
          </Paragraph>
        </Flex>
      </Group>
    </Card>
  );
}
