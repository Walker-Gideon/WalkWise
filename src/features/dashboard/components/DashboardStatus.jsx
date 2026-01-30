import { useEffect, useState } from "react";
import {
  LuTarget,
  LuRectangleVertical,
  LuClock,
  LuFlame,
} from "react-icons/lu";

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
    text: "Mastery Cards",
  },
  {
    icon: LuRectangleVertical,
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
];

export default function DashboardStatus() {
  const { userData, loading, error } = useUserData();

  const [statusData, setStatusData] = useState(status)

  useEffect(() => {
    const updatedStatus = status.map((stats) => {
      if (stats.text === "Mastery Cards") {
        return { ...stats, data: 0 };
      }

      if (stats.text === "Cards Today") {
        return { ...stats, data: 0 };
      }

      if (stats.text === "Study Time") {
        return { ...stats, data: 0 };
      }

      if (stats.text === "Day Streak") {
        return { ...stats, data: userData?.streakCount };
      }

      return stats;
    })

    setStatusData(updatedStatus);
  }, [userData])

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
