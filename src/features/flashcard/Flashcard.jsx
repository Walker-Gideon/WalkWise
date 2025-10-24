import { LuRectangleVertical } from "react-icons/lu";
import CreateFlashcardLayout from "./components/create-cards/CreateFlashcardLayout";
import InformationPrompt from "../../components/InformationPrompt";
import FlashcardHeader from "./components/FlashcardHeader";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";
import { useFlashcard } from "./context/FlashcardContext";

export default function Flashcard() {
  const { isDisplayFlashcardLayout, setIsDisplayFlashcardLayout } =
    useFlashcard();

  function handleDisplayCreateCard() {
    setTimeout(() => {
      setIsDisplayFlashcardLayout((show) => !show);
    }, 200);
  }

  return (
    <Container>
      <FlashcardHeader />
      <Main
        classname={`${isDisplayFlashcardLayout ? "h-screen w-full" : "h-[500px]"}`}
      >
        <Conditional condition={!isDisplayFlashcardLayout}>
          <InformationPrompt
            /* dark:text-slate-300 */
            icon={<LuRectangleVertical className="icons" />}
            promptText="You haven't created any flashcards yet."
            actionText='Get started by tapping "Create Flashcard"'
            onclick={handleDisplayCreateCard}
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
