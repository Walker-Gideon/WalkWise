import { useQuery } from "@tanstack/react-query";
import { getFlashcards } from "/src/service/apiFlashcard";

export function useFlashcards(userId = null) {
  return useQuery({
    queryKey: ["flashcards", userId],
    queryFn: () => getFlashcards(userId),
  });
}
