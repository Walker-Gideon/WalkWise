import { useEffect, useState } from "react";

import status from "/src/data/dashboardStatus";
import StatusDisplay from "/src/components/StatusDisplay";

import { useUserData } from "/src/user/hook/useUserData";
import useTodayStudyTime from "../hooks/useTodayStudyTime";
import useTodayFlashcards from "../hooks/useTodayFlashcards";

export default function DashboardStatus() {
  const { userData } = useUserData();
  const { totalStudyTime } = useTodayStudyTime();
  const { todayFlashcards } = useTodayFlashcards();

  const [statusData, setStatusData] = useState(status);

  const cardCount = todayFlashcards?.length || 0;

  useEffect(() => {
    const updatedStatus = status.map((stats) => {
      if (stats.text === "Mastery Cards") {
        return { ...stats, data: 0 };
      }

      if (stats.text === "Cards Today") {
        return { ...stats, data: cardCount };
      }

      if (stats.text === "Study Time") {
        return { ...stats, data: `${totalStudyTime}m` };
      }

      if (stats.text === "Day Streak") {
        return { ...stats, data: userData?.streakCount };
      }

      return stats;
    })

    setStatusData(updatedStatus);
  }, [userData, cardCount, totalStudyTime])

  return <StatusDisplay statusData={statusData} />;
}
