import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createSession as createSessionAPI } from "/src/service/apiSchedule";
import { useUserData } from "/src/user/hook/useUserData";

export default function useCreateSession() {
    const queryClient = useQueryClient();

    const { firebaseUser } = useUserData();
    const userId = firebaseUser?.uid;

    const { mutate: createSession, isPending: isCreating } = useMutation({
        mutationFn: (data) => {
            if (!userId) {
                throw new Error("You must be logged in to create a session.");
            }

            return createSessionAPI({ ...data, userId });
        },
        onSuccess: () => {
            toast.success("Session created successfully");
            queryClient.invalidateQueries({ queryKey: ["sessions", userId] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { createSession, isCreating };
}