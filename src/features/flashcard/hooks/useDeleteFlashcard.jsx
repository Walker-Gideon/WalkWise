import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteFlashcard as deleteFlashcardApi } from "/src/service/apiFlashcard";

export default function useDeleteFlashcard() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFlashcard } = useMutation({
    mutationFn: (id) => deleteFlashcardApi(id),
    onSuccess: () => {
      toast.success("Flashcard successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["flashcards"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFlashcard };
}