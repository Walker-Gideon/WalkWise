import { LuPlus, LuPlay, LuLightbulb, LuCalendar } from "react-icons/lu";

const actions = [
  {
    icon: LuPlus,
    text: "Add Note",
    to: "notes",
    title: "Notes",
  },
  {
    icon: LuPlay,
    text: "Study Now",
    to: "flashcards",
    title: "Flashcards",
  },
  {
    icon: LuCalendar,
    text: "Schedule",
    to: "schedules",
    title: "Schedules",
  },
  {
    icon: LuLightbulb,
    text: "Inspire",
    to: "inspire",
    title: "Inspire",
  },
];

export default actions;
