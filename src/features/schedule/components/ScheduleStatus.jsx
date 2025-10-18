import { LuTarget, LuClock, LuFlame, LuTrendingUp } from "react-icons/lu";

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
  return <div></div>;
}
