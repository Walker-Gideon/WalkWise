import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateFlashcard as updateFlashcardAPI } from "/src/service/apiFlashcard";

export default function useUpdateFlashcard() {
  //   const queryClient = useQueryClient();

  const { mutate: updateMutation, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, data }) => updateFlashcardAPI(id, data),
    onSuccess: () => {
      toast.success("Flashcard successfully updated");
      //   queryClient.invalidateQueries({ queryKey: ["flashcards", userId] });
      console.log("Flashcard updated!");
      //   reset();
    },
    onError: (err) => {
      console.error(err);
    },
    // onError: (err) => toast.error(err.message),
  });

  return { updateMutation, isUpdating };
}
