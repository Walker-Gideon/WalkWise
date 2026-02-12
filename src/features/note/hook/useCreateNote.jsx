import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useUserData } from "/src/user/hook/useUserData";
import { createNote as createNoteAPI } from "/src/service/apiNote";

export default function useCreateNote() {
    const queryClient = useQueryClient();

    const { firebaseUser } = useUserData();
    const userId = firebaseUser?.uid;

    const { mutate: createNote, isPending: isCreating } = useMutation({
        mutationFn: (data) => {
            if (!userId) {
                toast.error("You must be logged in to create a note.");
            }

            return createNoteAPI({ ...data, userId });
        },
        onSuccess: () => {
            toast.success("Note created successfully");
            queryClient.invalidateQueries({ queryKey: ["notes", userId] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { createNote, isCreating };
}