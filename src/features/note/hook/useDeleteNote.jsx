import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteNote as deleteNoteApi } from "/src/service/apiNote";
import { useUserData } from "/src/user/hook/useUserData";

export default function useDeleteNote() {
  const queryClient = useQueryClient();

  const { firebaseUser } = useUserData();
  const userId = firebaseUser?.uid;

  const { isLoading: isDeleting, mutate: deleteNote } = useMutation({
    mutationFn: (id) => deleteNoteApi(id),
    onSuccess: () => {
      toast.success("Note successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["notes", userId],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteNote };
}