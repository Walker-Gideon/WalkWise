import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createFlashcard as createFlashcardAPI } from "/src/service/apiFlashcard";
import { useUserData } from "/src/user/hook/useUserData";

export default function useCreateFlashcard() {
  const queryClient = useQueryClient();

  const { firebaseUser } = useUserData();
  const userId = firebaseUser?.uid;

  const { mutate: createFlashcard, isPending: isCreating } = useMutation({
    mutationFn: (data) => {
      if (!userId) {
        toast.error("You must be logged in to create a flashcard.");
      }

      return createFlashcardAPI({ ...data, userId });
    },
    onSuccess: () => {
      toast.success("Flashcard created successfully");
      queryClient.invalidateQueries({ queryKey: ["flashcards", userId] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createFlashcard, isCreating };
}
