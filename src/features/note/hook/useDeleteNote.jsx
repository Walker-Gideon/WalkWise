import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteNote as deleteNoteApi } from "/src/service/apiNote";

export default function useDeleteNote() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNote } = useMutation({
    mutationFn: (id) => deleteNoteApi(id),
    onSuccess: () => {
      toast.success("Note successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteNote };
}