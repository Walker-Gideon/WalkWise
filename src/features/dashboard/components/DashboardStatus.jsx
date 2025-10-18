import {
  LuTarget,
  LuRectangleVertical,
  LuClock,
  LuFlame,
} from "react-icons/lu";
import Badge from "/src/components/Badge";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

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
            <stats.icon
              // dark:text-slate-300
              className={`h-5 w-5 text-slate-600`}
            />
          </Badge>
          <div className="text-right">
            <p //dark:text-white
              className="medium:text-xl text-lg font-bold text-slate-900"
            >
              {stats.data}
            </p>
            <p className="medium:text-sm text-xs text-nowrap text-slate-500 dark:text-slate-400">
              {stats.text}
            </p>
          </div>
        </Card>
      ))}
    </Group>
  );
}
