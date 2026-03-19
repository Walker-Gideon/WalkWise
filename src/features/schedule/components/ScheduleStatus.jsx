import {isSameDay} from "date-fns";
import { useEffect, useState } from "react";

import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import HeaderText from "/src/ui/HeaderText";
import status from "/src/data/scheduleStatus";

import { useSessions } from "../hooks/useSessions";
import { useUserData } from "/src/user/hook/useUserData";
import { useSuccessRate } from "/src/hook/useSuccessRate";
import { useStudyTiming } from "/src/hook/useStudyTiming";

export default function ScheduleStatus() {
  const { sessions } = useSessions();
  const successRate = useSuccessRate(sessions);
  const { userData, loading, error } = useUserData();
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

  if (loading) return <Spinner classname="flex items-center justify-center p-8" />;

  if (error)
    return (
      <Paragraph classname="text-red-500 text-center">
        Error loading schedule data
      </Paragraph>
    );

  return (
    <Group
      classname={
        "medium:grid-cols-2 grid grid-cols-1 gap-4 medium:gap-6 lg:grid-cols-4"
      }
    >
      {statusData.map((stats, index) => (
        <Card
          key={index}
          classname={"hover:shadow-lg flex items-center justify-between"}
        >
          <Badge type="primary">
            <stats.icon className={"icons"} />
          </Badge>
          <Group classname="text-right">
            <HeaderText type="primary">{stats.data}</HeaderText>
            <Paragraph
              variant="small"
              classname="text-nowrap secondary-text-color"
            >
              {stats.text}
            </Paragraph>
          </Group>
        </Card>
      ))}
    </Group>
  );
}
