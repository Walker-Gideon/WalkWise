import { useEffect, useState } from "react";
import { LuTarget, LuClock, LuFlame, LuTrendingUp } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Badge from "/src/components/Badge";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

import { useUserData } from "/src/user/hook/useUserData";

const status = [
  {
    icon: LuTarget,
    data: 0,
    text: "Cards Today",
  },
  {
    icon: LuClock,
    data: 0 + "m",
    text: "Study Time",
  },
  {
    icon: LuFlame,
    data: 0,
    text: "Day Streak",
  },
  {
    icon: LuTrendingUp,
    data: 0 + "%",
    text: "Success Rate",
  },
];

export default function ScheduleStatus() {
  const { userData, loading, error } = useUserData();
  // console.log(userData);

  const [statusData, setStatusData] = useState(status)

  useEffect(() => {
    const updated = status.map((card) => {
      if (card.text === "Cards Today") {
        return { ...card, data: 1 }; // will change the data here
      }

      if (card.text === "Day Streak") {
        return { ...card, data: userData?.streakCount };
      }

      return card; 
    })

    setStatusData(updated);
  }, [userData])

  /*
  const { progress, loadingProgress, consistencyScore, todayFlashcards } =
    useGen();
  const [cardData, setCardData] = useState(initialCardData);

  useEffect(() => {
    if (!loadingProgress && progress) {
      const today = new Date().toISOString().split("T")[0];
      const todayCards = progress.studyLogs?.[today] || 0;

      const updated = initialCardData.map((card) => {
        if (card.text === "Cards Today") {
          return { ...card, data: todayFlashcards?.length };
        }

        if (card.text === "Day Streak") {
          return { ...card, data: progress?.streakCount };
        }

        if (card.text === "Study Time") {
          return { ...card, data: todayCards + "m" };
        }

        if (card.text === "Success Rate") {
          return { ...card, data: consistencyScore + "%" };
        }

        return card;
      });

      setCardData(updated);
    }
  }, [loadingProgress, progress, consistencyScore, todayFlashcards?.length]);

  */ 

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
