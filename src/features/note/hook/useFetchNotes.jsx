import { useQuery } from "@tanstack/react-query";

import { getNotes } from "/src/service/apiNote";
import { useUserData } from "/src/user/hook/useUserData";

export function useFetchNotes() {
    const { userData } = useUserData()

    const { data: notes, isPending, error } = useQuery({
        queryKey: ["notes", userData?.uid],
        queryFn: () => getNotes(userData?.uid),
        enabled: !!userData?.uid,
    });

    return { notes, isPending, error };
}