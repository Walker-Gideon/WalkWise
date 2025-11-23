import { useQuery } from "@tanstack/react-query";

import { getFlashcards } from "../../../service/apiFlashcard";

export function useFlashcards(userId = null) {
  return useQuery({
    queryKey: ["flashcards", userId],
    queryFn: () => getFlashcards(userId),
  });
}
