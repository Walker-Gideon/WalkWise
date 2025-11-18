import { LuTarget, LuClock, LuFlame, LuTrendingUp } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Badge from "/src/components/Badge";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

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
  return (
    <Group
      classname={
        "medium:grid-cols-2 grid grid-cols-1 gap-4 medium:gap-6 lg:grid-cols-4"
      }
    >
      {status.map((stats, index) => (
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
