import { useEffect, useState } from "react";

import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import HeaderText from "/src/ui/HeaderText";
import status from "/src/data/dashboardStatus";

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

  return (
    <Group status={true}>
      {statusData.map((stats, index) => (
        <Card
          key={index}
          status={true}
          classname={"hover:shadow-lg flex items-center justify-between"}
        >
          <Badge type="primary" status={true}>
            <stats.icon className={"icons"} />
          </Badge>
          <Group classname={"text-right"}>
            <HeaderText type="status">{stats.data}</HeaderText>
            <Paragraph
              type="xs"
              classname={"text-nowrap secondary-text-color"}
            >
              {stats.text}
            </Paragraph>
          </Group>
        </Card>
      ))}
    </Group>
  );
}
