import { useQuery } from "@tanstack/react-query";

import { getNoteById } from "/src/service/apiNote";

export function useFetchNoteById(noteId) {
    const { data: note, isPending, error } = useQuery({
        queryKey: ["note", noteId],
        queryFn: () => getNoteById(noteId),
        enabled: !!noteId,
    });

    return { note, isPending, error };
}