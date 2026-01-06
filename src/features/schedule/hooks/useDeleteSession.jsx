import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteSession as deleteSessionApi } from "/src/service/apiSchedule";

export default function useDeleteSession() {
    const queryClient = useQueryClient();
    
    const { isLoading: isDeleting, mutate: deleteSession } = useMutation({
        mutationFn: (id) => deleteSessionApi(id),
        onSuccess: () => {
          toast.success("Session successfully deleted");
          queryClient.invalidateQueries({
            queryKey: ["sessions"],
          });
        },
        onError: (err) => toast.error(err.message),
    });
    
    return { isDeleting, deleteSession };
}