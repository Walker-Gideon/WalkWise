import toast from "react-hot-toast";

import { RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import useDeleteFlashcard from "../../../hooks/useDeleteFlashcard";
import { useFetchCards } from "../../../hooks/useCards";
import useFormattedDate from "/src/hook/useFormattedDate";

export default function CardContentDisplay() {
  const { flashcards, isLoading, error } = useFetchCards();
  const { isDeleting, deleteFlashcard } = useDeleteFlashcard()

  /*
  // Function to fetch the flashcards
  async function handleFlashcardsClick(flashcardId) {
    try {
      const flashcardsRef = doc(
        db,
        "users",
        user.uid,
        "flashcards",
        flashcardId,
      );
      const flashcardSnap = await getDoc(flashcardsRef);

      if (flashcardSnap.exists()) {
        const flashcardData = flashcardSnap.data();
        setCurrentFlashcard({ id: flashcardId, ...flashcardData });

        // Display the flashcard on click
        setShowPreview(true);
        setShowCreateFlashcard(true);
        setReadAlredyFlashcard(true);

        // Set the id for the case a user want to edit
        SetEditFlashcardData({ id: flashcardId, ...flashcardData });
      }

      setQueryFlashcard("");
      setFilteredFlashcard(displayCreatedFlashcard);
    } catch (error) {
      return error;
    } finally {
      setLoadingFC(false);
    }
  }
    */

  return (
    <>
      {isLoading && <Spinner />}
      <Container adjust={true} classname={"md:px-8 lg:mx-auto lg:max-w-5xl"}>
        {flashcards?.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            numOfCards={card.pairs.length}
            handleDelete={() => deleteFlashcard(card.id)}
            timing={card.createdAt}
          />
        ))}
      </Container>
      {error && toast.error("Error fetching flashcards")}
    </>
  );
}

function Cards({ title, numOfCards, handleDelete, timing }) {
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
