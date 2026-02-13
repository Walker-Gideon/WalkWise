import { useMemo } from "react";

import { useUserData } from "/src/user/hook/useUserData";
import { useFlashcards } from "/src/features/flashcard/hooks/useFlashcards";

export default function useTodayFlashcards() {
  const { firebaseUser } = useUserData();
  const userId = firebaseUser?.uid;

  const { data: flashcards, isPending, error } = useFlashcards(userId);

  const todayFlashcards = useMemo(() => {
    if (!flashcards) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return flashcards.filter((flashcard) => {
      if (!flashcard.createdAt) return false;

      let createdDate;
      if (flashcard.createdAt.toDate) {
        createdDate = flashcard.createdAt.toDate();
      } else if (flashcard.createdAt instanceof Date) {
        createdDate = flashcard.createdAt;
      } else {
        createdDate = new Date(flashcard.createdAt);
      }

      return createdDate >= today && createdDate < tomorrow;
    });
  }, [flashcards]);

  return { todayFlashcards, isPending, error };
}
