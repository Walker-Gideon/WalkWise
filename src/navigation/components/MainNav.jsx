import { NavLink } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuBookOpen,
  LuRectangleVertical,
  LuCalendar,
  LuLightbulb,
  LuSettings2,
} from "react-icons/lu";

import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import List from "/src/ui/List";
import Nav from "/src/ui/Nav";

import { useNav } from "/src/contexts/NavigationContext";

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
  const { isExpanded, handleToggle } = useNav();

  return (
    <Nav classname={"p-4"}>
      {buttonsData.map((data, index) => (
        <Group
          key={index}
          classname={`group relative flex flex-col gap-1 ${index === 0 ? `pb-1` : `py-1`}`}
        >
          <NavLink
            to={data.to}
            end
            onClick={handleToggle}
            className={({ isActive }) =>
              `w-full cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-600 hover:text-white dark:text-slate-300 ${isExpanded ? "" : ""} ${isActive ? "bg-slate-500 text-white" : ""}`
            }
          >
            <List classname={"flex items-center gap-2.5"}>
              <SpanText>{<data.icon className="text-sm" />}</SpanText>
              <SpanText classname={`${isExpanded ? "hidden" : ""}`}>
                {data.text}
              </SpanText>
            </List>
          </NavLink>
          <Group
            classname={`pointer-events-none absolute top-1 left-14 z-40 -translate-y-1/2 transform rounded-full bg-slate-500 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 ${isExpanded ? "medium:block" : "hidden"}`}
          >
            {data.text}
          </Group>
        </Group>
      ))}
    </Nav>
  );
}
