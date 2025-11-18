import { LuRectangleVertical } from "react-icons/lu";

import CreateFlashcardLayout from "./components/create-cards/CreateFlashcardLayout";
import InformationPrompt from "/src/components/InformationPrompt";
import FlashcardHeader from "./components/FlashcardHeader";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

import { useFlashcard } from "./context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

export default function Flashcard() {
  const { isDisplayFlashcardLayout, setIsDisplayFlashcardLayout } =
    useFlashcard();

  const toggleDisplay = useToggleDisplay(setIsDisplayFlashcardLayout);

  return (
    <Container>
      <FlashcardHeader />
      <Main
        classname={`${isDisplayFlashcardLayout ? "h-screen w-full" : "h-[500px]"}`}
      >
        <Conditional condition={!isDisplayFlashcardLayout}>
          <InformationPrompt
            icon={<LuRectangleVertical className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
            promptText="You haven't created any flashcards yet."
            actionText='Get started by tapping "Create Flashcard"'
            onclick={toggleDisplay}
            buttonText="Create Flashcard"
          />
        </Conditional>
        <Conditional condition={isDisplayFlashcardLayout}>
          <CreateFlashcardLayout />
        </Conditional>
      </Main>
    </Container>
  );
}
