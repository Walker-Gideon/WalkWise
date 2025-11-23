import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createFlashcard as createFlashcardAPI } from "/src/service/apiFlashcard";

export default function useCreateFlashcard() {
  //   const queryClient = useQueryClient();

  const { mutate: createMutation, isPending: isCreating } = useMutation({
    mutationFn: createFlashcardAPI,
    onSuccess: () => {
      toast.success("Flashcard successfully created");
      //   queryClient.invalidateQueries({ queryKey: ["cabins"] });
      console.log("Flashcard created!");
      //   reset();
    },
    onError: (err) => {
      console.error(err);
    },
    // onError: (err) => toast.error(err.message),
  });

  return { createMutation, isCreating };
}
