import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSession as updateSessionAPI } from "/src/service/apiSchedule";

export function useUpdateSession() {
    const queryClient = useQueryClient();

    const { mutate: updateMutation, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, data, silent }) => updateSessionAPI(id, data),
        onSuccess: (data, variables) => {
            if (!variables.silent) {
                toast.success("Session successfully updated");
            }
            queryClient.invalidateQueries({ queryKey: ["sessions"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateSession: updateMutation, isUpdating };
}