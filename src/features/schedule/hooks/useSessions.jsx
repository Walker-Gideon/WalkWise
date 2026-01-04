import { useQuery } from "@tanstack/react-query";
import { getSessions as getSessionsAPI } from "/src/service/apiSchedule";
import { useUserData } from "/src/user/hook/useUserData";

export function useSessions() {
    const { firebaseUser } = useUserData();
    const userId = firebaseUser?.uid;

    const { data: sessions, isLoading, error } = useQuery({
        queryKey: ["sessions", userId],
        queryFn: () => getSessionsAPI(userId),
        enabled: !!userId,
    });

    return { sessions, isLoading, error };
}
