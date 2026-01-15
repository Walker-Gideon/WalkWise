import { useEffect, useState } from "react";
import { LuTarget, LuClock, LuFlame, LuTrendingUp } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Badge from "/src/components/Badge";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Group from "/src/ui/Group";

import { useUserData } from "/src/user/hook/useUserData";

const status = [
  {
    icon: LuTarget,
    data: 0,
    text: "Session Today",
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
  const [statusData, setStatusData] = useState(status)

  useEffect(() => {
    const updated = status.map((card) => {
      if (card.text === "Session Today") {
        return { ...card, data: 1 }; // will change the data here
      }

      if (card.text === "Study Time") {
        return { ...card, data: 1 + "m" }; // will change the data here (userData?.studyTime + "m")
      }

      if (card.text === "Day Streak") {
        return { ...card, data: userData?.streakCount };
      }

      if (card.text === "Success Rate") {
        return { ...card, data: 1 + "%" }; // will change the data here (userData?.successRate + "%")
      }

      return card; 
    })

    setStatusData(updated);
  }, [userData]) 

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
