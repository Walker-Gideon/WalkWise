import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LuRectangleVertical } from "react-icons/lu";

import Container from "/src/ui/Container";
import Conditional from "/src/components/Conditional";
import FlashcardHeader from "./components/FlashcardHeader";
import InformationPrompt from "/src/components/InformationPrompt";
import StudyFlashcard from "./components/create-cards/StudyFlashcard";
import CreatedForm from "./components/create-cards/create/CreatedForm";
import CardsInitDisplay from "./components/create-cards/CardsInitDisplay";
import StudyFlashcardSummary from "./components/create-cards/StudyFlashcardSummary";

import { useFlashcards } from "./hooks/useFlashcards";
import { useFlashcard } from "./context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";
import { useAuthentication } from "/src/authentication/context/AuthContext";

export default function Flashcard() {
  const { user } = useAuthentication();
  const { data: flashcards } = useFlashcards(user?.uid);
  const { isPlay, isDisplay, finished, setIsDisplay, setIsPlay, setActiveId, activeId } = useFlashcard();
  
  const [searchParams] = useSearchParams();

  const handleToggleDisplay = useToggleDisplay(setIsDisplay);
  const hasFlashcards = flashcards?.length > 0;

  // Sync URL with context
  useEffect(() => {
    const studyId = searchParams.get("study");

    if (studyId && studyId !== activeId) {
        setActiveId(studyId);
        setIsPlay(true);
        setIsDisplay(false);
    } else if (!studyId && isPlay) {
        setIsPlay(false);
        setActiveId(null);
    }

  }, [searchParams, setActiveId, setIsPlay, setIsDisplay, activeId, isPlay]);

  return (
    <Container classname={"flex h-full flex-col"}>
      {/* 1. Initial Display */}
      <Conditional condition={!isDisplay && !hasFlashcards}>
        <FlashcardHeader />
        <InformationPrompt
          icon={
            <LuRectangleVertical className="h-5 w-5 text-slate-600 dark:text-slate-900" />
          }
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
        <Conditional condition={!isPlay}>
          <CardsInitDisplay />
        </Conditional>
        <Conditional condition={isPlay}>
          <Conditional condition={!finished}> 
            <StudyFlashcard />
          </Conditional>
          <Conditional condition={finished}>
            <StudyFlashcardSummary />
          </Conditional>
        </Conditional>
      </Conditional>
    </Container>
  );
}
