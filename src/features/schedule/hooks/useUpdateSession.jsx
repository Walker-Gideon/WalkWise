import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSession as updateSessionAPI } from "/src/service/apiSchedule";

export default function useUpdateSession() {
    const queryClient = useQueryClient();

    const { mutate: updateMutation, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, data }) => updateSessionAPI(id, data),
        onSuccess: () => {
            toast.success("Session successfully updated");
            queryClient.invalidateQueries({ queryKey: ["sessions"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateMutation, isUpdating };
}