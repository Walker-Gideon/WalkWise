import { LuFlame, LuBookOpen, LuSun, LuMoon, LuTarget } from "react-icons/lu";

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

export default achievements;