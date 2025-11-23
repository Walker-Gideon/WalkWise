import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createFlashcard as createFlashcardAPI } from "/src/service/apiFlashcard";

export default function useCreateFlashcard(userId = null) {
  const queryClient = useQueryClient();

  const { mutate: createFlashcard, isPending: isCreating } = useMutation({
    mutationFn: createFlashcardAPI,
    onSuccess: () => {
      toast.success("Flashcard successfully created");
      queryClient.invalidateQueries({ queryKey: ["flashcards", userId] });
      console.log("Flashcard created!");
      //   reset();
    },
    onError: (err) => {
      console.error(err);
    },
    // onError: (err) => toast.error(err.message),
  });

  return { createFlashcard, isCreating };
}
