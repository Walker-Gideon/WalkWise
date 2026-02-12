import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useUserData } from "/src/user/hook/useUserData";
import { updateNote as updateNoteAPI } from "/src/service/apiNote";

export default function useUpdateNote() {
    const queryClient = useQueryClient();
    const { firebaseUser } = useUserData();
    const userId = firebaseUser?.uid;

    const { mutate: updateNote, isPending: isUpdating } = useMutation({
        mutationFn: ({ noteId, data }) => updateNoteAPI(noteId, data),
        onSuccess: () => {
            toast.success("Note updated successfully");
            queryClient.invalidateQueries({ queryKey: ["notes", userId] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateNote, isUpdating };
}
