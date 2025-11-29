import { LuRectangleVertical } from "react-icons/lu";

import CardsInitDisplay from "./components/create-cards/CardsInitDisplay";
import CreatedForm from "./components/create-cards/create/CreatedForm";
import InformationPrompt from "/src/components/InformationPrompt";
import FlashcardHeader from "./components/FlashcardHeader";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";

import { useAuthentication } from "/src/authentication/context/AuthContext";
import { useFlashcard } from "./context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";
import { useFlashcards } from "./hooks/useFlashcards";

export default function Flashcard() {
  const { user } = useAuthentication();
  const { data: flashcards } = useFlashcards(user?.uid);
  const { isDisplay , setIsDisplay} = useFlashcard();

  const handleToggleDisplay = useToggleDisplay(setIsDisplay);
  const hasFlashcards = flashcards?.length > 0;

  return (
    <Container>
      {/* 1. Initial Display */}
      <Conditional condition={!isDisplay && !hasFlashcards}>
        <FlashcardHeader />
        <InformationPrompt
          icon={<LuRectangleVertical className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          promptText="You haven't created any flashcards yet."
          actionText='Get started by tapping "Create Flashcard"'
          onclick={handleToggleDisplay}
          buttonText="Create Flashcard"
        />
      </Conditional>

      {/* 2. Create/Edit Flashcard */}
      <Conditional condition={isDisplay}>
        <CreatedForm />
      </Conditional>

      {/* 3. Flashcard Layout/ Study Flashcard */}
      <Conditional condition={hasFlashcards && !isDisplay}>
        <CardsInitDisplay />
      </Conditional>
    </Container>
  );
}
