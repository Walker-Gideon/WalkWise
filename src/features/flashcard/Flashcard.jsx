import { LuRectangleVertical } from "react-icons/lu";
import CreateFlashcardLayout from "./components/create-cards/CreateFlashcardLayout";
import InformationPrompt from "../../components/InformationPrompt";
import FlashcardHeader from "./components/FlashcardHeader";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";
import { useState } from "react";

export default function Flashcard() {
  const [isDisplayCreateCard, setIsDisplayCreateCard] = useState(false);

  function handleDisplayCreateCard() {
    setTimeout(() => {
      setIsDisplayCreateCard((show) => !show);
    }, 200);
  }

  return (
    <Container>
      <FlashcardHeader isDisplayCreateCard={isDisplayCreateCard} />
      <Main
        classname={`${isDisplayCreateCard ? "h-screen w-full" : "h-[500px]"}`}
      >
        <Conditional condition={!isDisplayCreateCard}>
          <InformationPrompt
            /* dark:text-slate-300 */
            icon={<LuRectangleVertical className="icons" />}
            promptText="You haven't created any flashcards yet."
            actionText='Get started by tapping "Create Flashcard"'
            onclick={handleDisplayCreateCard}
            buttonText="Create Flashcard"
          />
        </Conditional>
        <Conditional condition={isDisplayCreateCard}>
          <CreateFlashcardLayout />
        </Conditional>
      </Main>
    </Container>
  );
}
