import { RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

import { getFlashcards } from "/src/service/apiFlashcard";
import { useUserData } from "/src/user/hook/useUserData";
import { useQuery } from "@tanstack/react-query";

export default function CardContentDisplay() {
  const { userData } = useUserData();

  const {
    data: flashcards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["flashcards", userData?.uid],
    queryFn: () => getFlashcards(userData.uid),
    enabled: !!userData?.uid, // only run if userData.uid exists
  });

  console.log("flashcard data", flashcards);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching flashcards</div>;

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
    <Container adjust={true} classname={"px-6 grid grid-cols-4 gap-6"}>
      <Cards />
    </Container>
  );
}

function Cards() {
  const styling = {
    button:
      "rounded-sm bg-slate-500 p-2 text-white opacity-0 transition-colors group-hover:opacity-100 hover:bg-slate-600",
    icon: "h-4 w-4",
  };

  return (
    <Card classname={"cursor-pointer group"}>
      <HeaderText classname={"mb-6"}>Titile</HeaderText>
      <Group classname={"flex items-center justify-between"}>
        <Paragraph type="xs" classname={"text-slate-500 dark:text-slate-400"}>
          # card(s)
        </Paragraph>
        <Paragraph>
          timing{" "}
          <GoDotFill className="h-3 w-3 text-slate-500 dark:text-slate-400" />
        </Paragraph>
      </Group>
    </Card>
  );
}
