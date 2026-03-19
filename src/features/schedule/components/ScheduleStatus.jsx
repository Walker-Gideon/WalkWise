import {isSameDay} from "date-fns";
import { useEffect, useState } from "react";

import status from "/src/data/scheduleStatus";
import StatusDisplay from "/src/components/StatusDisplay";

import { useSessions } from "../hooks/useSessions";
import { useUserData } from "/src/user/hook/useUserData";
import { useSuccessRate } from "/src/hook/useSuccessRate";
import { useStudyTiming } from "/src/hook/useStudyTiming";

export default function ScheduleStatus() {
  const { userData } = useUserData();
  const { sessions } = useSessions();
  const successRate = useSuccessRate(sessions);
  const { formattedTime } = useStudyTiming(sessions);

  const [statusData, setStatusData] = useState(status)

  useEffect(() => {
    if (!sessions) return;

    const todaySessionsCount = sessions.filter((session) => {
      if (!session.scheduledAt) return false;
      const date = session.scheduledAt.toDate ? session.scheduledAt.toDate() : new Date(session.scheduledAt);
      return isSameDay(date, new Date());
    }).length;

    const updated = status.map((card) => {
      if (card.text === "Session Today") {
        return { ...card, data: todaySessionsCount };
      }

      if (card.text === "Focus Time") {
        return { ...card, data: formattedTime };
      }

      if (card.text === "Day Streak") {
        return { ...card, data: userData?.streakCount };
      }

      if (card.text === "Success Rate") {
        return { ...card, data: successRate + "%" }; 
      }

      return card; 
    })

    setStatusData(updated);
  }, [userData, sessions, formattedTime, successRate]) 

  return <StatusDisplay statusData={statusData} />;
}
