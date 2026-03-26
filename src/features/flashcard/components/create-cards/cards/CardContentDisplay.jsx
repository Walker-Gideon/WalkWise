import toast from "react-hot-toast";
import { LuPlay } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import Container from "/src/ui/Container";
import Menus from "/src/components/Menus";
import Paragraph from "/src/ui/Paragraph";
import Conditional from "/src/components/Conditional";
import ConfirmDelete from "/src/components/ConfirmDelete";

import { useFetchCards } from "/src/hook/useCards";
import useFormattedDate from "/src/hook/useFormattedDate";
import { useFlashcard } from "../../../context/FlashcardContext";
import useDeleteFlashcard from "../../../hooks/useDeleteFlashcard";

export default function CardContentDisplay() {
  const { flashcards, isPending, error } = useFetchCards();
  const { isDeleting, deleteFlashcard } = useDeleteFlashcard();
  const { query, setIsDisplay, setEditingId } = useFlashcard();

  const [selectedId, setSelectedId] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");

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
  const filterValue = searchParams.get("filter") || "title";

  // Enforce default param
  useEffect(() => {
    if (!searchParams.get("filter") && !searchParams.get("study")) {
      setSearchParams({ filter: "title" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

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
    setSearchParams({ study: id }, { state: { previousFilter: filterValue } });
  }

  function handleEditClick(id) {
    setEditingId(id);
    setIsDisplay(true);
  }

  return (
    <Group classname={`px-6`}>
      <Conditional condition={isPending || isSearching}>
        <Spinner secondary={true} styling={"mt-20 md:mt-40"} spinnerWidth={"h-6 w-6 md:h-8 md:w-8"} />
      </Conditional>
      <Container adjust={true} classname={"md:px-8 md:max-w-2xl lg:mx-auto lg:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        <Conditional condition={!isSearching}>
          {filteredFlashcards?.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              numOfCards={card.pairs.length}
              handleDelete={() => handleDeleteClick(card.id, card.title)}
              handlePlay={() => handlePlayClick(card.id)}
              handleEdit={() => handleEditClick(card.id)}
              timing={card.createdAt}
            />
          ))}
        </Conditional>
      </Container>
      <Conditional condition={isDeleteModal}>
        <ConfirmDelete
          resourceName={selectedCardTitle}
          disabled={isDeleting}
          onCloseModal={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      </Conditional>
      <Conditional condition={!isSearching && filteredFlashcards?.length === 0}>
        <Flex variant="center" classname={"h-80"}>
          <Paragraph classname={"text-center primary-text-color"}>
            No flashcards found
          </Paragraph>
        </Flex>
      </Conditional>
      {error && toast.error("Error fetching flashcards")}
    </Group>
  );
}

function Cards({ title, numOfCards, handleDelete, handlePlay, handleEdit, timing }) {
  const createdExact = useFormattedDate(timing);

  return (
    <Card
      classname={"mb-4 mt-1 shadow-xl"}
    >
      <Flex variant="between" classname={"w-full gap-2 min-w-0"}>
        <Flex variant="center" classname={"gap-2 flex-1 min-w-0"}>
          <Group classname={"h-3 w-3 medium:h-4 medium:w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}></Group>

          <Flex classname={"flex-col flex-1 min-w-0"}>
            <Paragraph type="sm" classname={"truncate w-full font-semibold primary-text-color mb-4"}>{title}</Paragraph>

            <Flex variant="between" classname={"w-full flex-wrap"}>
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
          </Flex>
        </Flex>

        <Group>
          <Menus>
            <Menus.Toggle />
            <Menus.Lists>
              <Menus.Buttons onClick={handlePlay}>
                <LuPlay className="w-4 h-4" />
                Play
              </Menus.Buttons>
              <Menus.Buttons onClick={handleEdit}>
                <RiEditLine className="w-4 h-4" />
                Edit
              </Menus.Buttons>
              <Menus.Buttons onClick={handleDelete}>
                <RiDeleteBin5Line className="w-4 h-4" />
                Delete
              </Menus.Buttons>
            </Menus.Lists>
          </Menus>
        </Group>
      </Flex>
    </Card>
  );
}
