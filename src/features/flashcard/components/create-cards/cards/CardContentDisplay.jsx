import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Group from "/src/ui/Group";

import { useFetchCards } from "../../../hooks/useCards";
import useFormattedDate from "/src/hook/useFormattedDate";

export default function CardContentDisplay() {
  const { flashcards, isLoading, error } = useFetchCards();

  console.log(flashcards);

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
      <Container
        adjust={true}
        classname={
          "medium:grid-cols-2 grid grid-cols-1 gap-4 medium:gap-6 lg:grid-cols-4 px-6"
        }
      >
        {flashcards?.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            numOfCards={card.pairs.length}
            timing={card.createdAt}
          />
        ))}
      </Container>
      {error && toast.error("Error fetching flashcards")}
    </>
  );
}

function Cards({ title, numOfCards, timing }) {
  const createdExact = useFormattedDate(timing);

  return (
    <Card classname={"cursor-pointer group flex flex-col justify-between"}>
      <HeaderText classname={"mb-6 primary-text-color"}>{title}</HeaderText>
      <Group classname={"flex items-center justify-between"}>
        <Paragraph type="xs" classname={"secondary-text-color"}>
          {numOfCards} card{numOfCards === 1 ? "" : "s"}
        </Paragraph>
        <Paragraph
          variant="small"
          classname={"flex items-center text-nowrap secondary-text-color gap-1"}
        >
          <GoDotFill className="h-3 w-3" /> {createdExact}
        </Paragraph>
      </Group>
    </Card>
  );
}
