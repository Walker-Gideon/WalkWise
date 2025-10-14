import {
  LuLayoutDashboard,
  LuBookOpen,
  LuRectangleVertical,
  LuCalendar,
  LuLightbulb,
  LuSettings2,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

const buttonsData = [
  {
    text: "Dashboard",
    to: "dashboard",
    icon: LuLayoutDashboard,
  },
  {
    text: "Note",
    to: "notes",
    icon: LuBookOpen,
  },
  {
    text: "Flashcards",
    to: "flashcards",
    icon: LuRectangleVertical,
  },
  {
    text: "Schedules",
    to: "schedule",
    icon: LuCalendar,
  },
  {
    text: "Inspire",
    to: "inspire",
    icon: LuLightbulb,
  },
  {
    text: "Settings",
    to: "settings",
    icon: LuSettings2,
  },
];

export default function MainNav() {
  return (
    <nav>
      {buttonsData.map((data, index) => (
        <ul key={index} className="flex flex-col gap-2 bg-red-500">
          <NavLink to={data.to}>
            <li>
              <span>{data.icon}</span>
              <span>{data.text}</span>
            </li>
          </NavLink>
        </ul>
      ))}
    </nav>
  );
}
