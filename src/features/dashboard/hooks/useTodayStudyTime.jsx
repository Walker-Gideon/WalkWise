import { useMemo } from "react";

import { useUserData } from "/src/user/hook/useUserData";
import { useSessions } from "/src/features/schedule/hooks/useSessions";

export default function useTodayStudyTime() {
  const { userData } = useUserData();
  const { sessions } = useSessions();

  const totalStudyTime = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const sessionTime = sessions?.reduce((total, session) => {
      if (session.status !== "Completed" || !session.duration) return total;

      let completedDate;
      const dateField = session.completedAt || session.updatedAt || session.createdAt;
      
      if (!dateField) return total;

      if (dateField.toDate) {
        completedDate = dateField.toDate();
      } else if (dateField instanceof Date) {
        completedDate = dateField;
      } else {
        completedDate = new Date(dateField);
      }

      if (completedDate >= today && completedDate < tomorrow) {
        return total + (session.duration || 0);
      }

      return total;
    }, 0) || 0;

    const flashcardTime = userData?.studyTime || 0;
    const totalSeconds = sessionTime + flashcardTime;
    
    return Math.floor(totalSeconds / 60);
  }, [sessions, userData]);

  return { totalStudyTime };
}
