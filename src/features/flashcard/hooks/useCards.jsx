import { useQuery } from "@tanstack/react-query";

import { getFlashcards } from "/src/service/apiFlashcard";
import { useUserData } from "/src/user/hook/useUserData";

export function useFetchCards() {
  const { userData } = useUserData();

  const {
    data: flashcards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["flashcards", userData?.uid],
    queryFn: () => getFlashcards(userData.uid),
    enabled: !!userData?.uid,
  });

  return { flashcards, isLoading, error };
}
