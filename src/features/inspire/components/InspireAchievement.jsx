import { LuFlame, LuBookOpen, LuSun, LuMoon, LuTarget } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

const achievements = [
  {
    id: 1,
    name: "7-Day Streak",
    description: "Maintained a study streak for 7 consecutive days.",
    unlocked: false,
    icon: LuFlame,
  },
  {
    id: 2,
    name: "100 Cards Studied",
    description: "Studied 100 flashcards across any sessions.",
    unlocked: false,
    icon: LuBookOpen,
  },
  {
    id: 3,
    name: "Early Bird",
    description: "Completed a study session before 8 AM.",
    unlocked: false,
    icon: LuSun,
  },
  {
    id: 4,
    name: "Night Owl",
    description: "Completed a study session after 10 PM.",
    unlocked: false,
    icon: LuMoon,
  },
  {
    id: 5,
    name: "Tag Master",
    description: "Achieved 90% mastery in any tag category.",
    unlocked: false,
    icon: LuTarget,
  },
];

export default function InspireAchievement() {
  return (
    <Card>
      <HeaderText variant="secondary" classname={"mb-4"}>
        Your Achievements
      </HeaderText>
      <Group
        classname={"medium:grid-cols-3 grid grid-cols-2 gap-4 md:grid-cols-4"}
      >
        {achievements.map((badge) => (
          <Badge
            key={badge.id}
            classname={`flex flex-col items-center rounded-xl p-4 transition-all duration-200 ${
              badge.unlocked
                ? "bg-slate-200 text-slate-700 shadow-md hover:scale-105 dark:bg-slate-900 dark:text-slate-300"
                : "bg-slate-50 text-slate-400 opacity-60 dark:bg-slate-700/50 dark:text-slate-600"
            }`}
          >
            <div
              className={`mb-2 rounded-full p-3 ${
                badge.unlocked
                  ? "bg-slate-500 text-white"
                  : "bg-slate-200 text-slate-500 dark:bg-slate-600 dark:text-slate-400"
              }`}
            >
              <badge.icon className="h-5 w-5" />
            </div>
            <p className="mb-1 text-center text-sm font-medium">{badge.name}</p>
            <p className="text-center text-xs">{badge.description}</p>
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
