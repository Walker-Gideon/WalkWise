import { useQuery } from "@tanstack/react-query";

import { getNotes } from "/src/service/apiNote";
import { useUserData } from "/src/user/hook/useUserData";

export default function useFetchNotes() {
    const { firebaseUser } = useUserData()

    const { data: notes, isPending, error } = useQuery({
        queryKey: ["notes", firebaseUser?.uid],
        queryFn: () => getNotes(firebaseUser?.uid),
        enabled: !!firebaseUser?.uid,
    });

    return { notes, isPending, error };
}