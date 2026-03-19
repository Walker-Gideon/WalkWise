import {isSameDay} from "date-fns";
import { useEffect, useState } from "react";

import Group from "/src/ui/Group";
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

  return (
    <Group status={true}>
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
