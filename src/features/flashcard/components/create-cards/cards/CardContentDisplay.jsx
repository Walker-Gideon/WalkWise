import toast from "react-hot-toast";
import { GoDotFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LuPlay, LuFolderSearch } from "react-icons/lu";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
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
      deleteFlashcard(selectedId, {
        onSuccess: () => handleCloseModal(),
        onError: () => {
          toast.error("Failed to delete flashcard.");
        },
      });
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
    <Group classname={`px-6 pb-6`}>
      <Conditional condition={isPending || isSearching}>
        <Spinner
          secondary={true}
          styling={"mt-20 md:mt-40"}
          spinnerWidth={"h-6 w-6"}
          label="Loading flashcards..."
        />
      </Conditional>
      <Container
        adjust={true}
        classname={
          "md:px-8 md:max-w-2xl lg:mx-auto lg:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
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
        <Flex variant="center" classname={"h-80 flex-col gap-3 mt-4"}>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <LuFolderSearch className="h-8 w-8 text-slate-400" />
          </div>
          <Paragraph
            classname={"text-center font-bold text-lg primary-text-color"}
          >
            No flashcards found
          </Paragraph>
          <Paragraph
            type="sm"
            classname={"text-center font-medium secondary-text-color"}
          >
            Try adjusting your search or create a new deck.
          </Paragraph>
        </Flex>
      </Conditional>
      {error && toast.error("Error fetching flashcards")}
    </Group>
  );
}

function Cards({
  title,
  numOfCards,
  handleDelete,
  handlePlay,
  handleEdit,
  timing,
}) {
  const createdExact = useFormattedDate(timing);

  return (
    <Card
      classname={
        "mb-4 mt-1 border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-slate-900/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative overflow-hidden bg-white dark:bg-slate-800"
      }
    >
      <Flex variant="between" classname={"w-full gap-2 min-w-0 items-start"}>
        <Flex classname={"gap-4 flex-1 min-w-0 items-start"}>
          <Group
            classname={
              "h-12 w-12 shrink-0 rounded-xl bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 mt-1"
            }
          >
            <span className="text-xl font-bold">
              {title.charAt(0).toUpperCase()}
            </span>
          </Group>

          <Flex classname={"flex-col flex-1 min-w-0"}>
            <Paragraph
              type="sm"
              classname={"truncate w-full font-bold primary-text-color"}
            >
              {title}
            </Paragraph>
            <Paragraph
              type="xs"
              classname={"secondary-text-color mt-0.5 mb-3 font-medium"}
            >
              {numOfCards} card{numOfCards === 1 ? "" : "s"}
            </Paragraph>
          </Flex>
        </Flex>

        <Group classname="flex items-start shrink-0 z-10 pt-1">
          <Menus>
            <Menus.Toggle />
            <Menus.Lists>
              <Menus.Buttons onClick={handleEdit}>
                <RiEditLine className="h-4 w-4" />
                Edit
              </Menus.Buttons>
              <Menus.Buttons onClick={handleDelete}>
                <RiDeleteBin5Line className="h-4 w-4" />
                Delete
              </Menus.Buttons>
            </Menus.Lists>
          </Menus>
        </Group>
      </Flex>

      <Button
        onClick={handlePlay}
        variant="primary"
        ariaLabel="Play Flashcards"
        className={"group/play my-3 flex w-full items-center justify-center"}
      >
        <LuPlay className="icons group-hover/play:text-slate-500" />
      </Button>

      <div className="flex w-full items-center justify-between">
        <Paragraph
          variant="small"
          classname={
            "flex items-center text-nowrap text-slate-400 dark:text-slate-500 gap-1.5 text-[11px] font-medium tracking-wide"
          }
        >
          <GoDotFill className="h-3 w-3" /> Created {createdExact}
        </Paragraph>
      </div>
    </Card>
  );
}
