import { useMemo } from "react";

import { useUserData } from "/src/user/hook/useUserData";
import { useFlashcards } from "/src/features/flashcard/hooks/useFlashcards";

export default function useMasteryCards() {
  const { firebaseUser } = useUserData();
  const userId = firebaseUser?.uid;

  const { data: flashcards } = useFlashcards(userId);

  const masteryCount = useMemo(() => {
    if (!flashcards) return 0;

    return flashcards.reduce((total, flashcard) => {
      const masteredPairs = flashcard.pairs?.filter(
        (pair) => pair.mastery === 100
      ).length || 0;

      return total + masteredPairs;
    }, 0);
  }, [flashcards]);

  return { masteryCount };
}
