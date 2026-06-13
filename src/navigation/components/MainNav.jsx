import { NavLink } from "react-router-dom";
import {
  LuBookOpen,
  LuCalendar,
  LuLightbulb,
  LuLayoutDashboard,
  LuRectangleVertical,
} from "react-icons/lu";

import Nav from "/src/ui/Nav";
import List from "/src/ui/List";
import Group from "/src/ui/Group";
import SpanText from "/src/ui/SpanText";

import { useNav } from "/src/contexts/NavigationContext";

const BUTTONS_DATA = [
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
];

export default function MainNav({ showLabel }) {
  const { isSidebarExpanded, collapseOnMobile } = useNav();
  const effectiveIsSidebarExpanded = showLabel ? true : isSidebarExpanded;

  return (
    <Nav classname={showLabel ? "p-2" : "p-4"}>
      {BUTTONS_DATA.map((data, index) => (
        <Group
          key={index}
          classname={`group relative flex flex-col gap-1 ${index === 0 ? "pb-1" : "py-1"}`}
        >
          <NavLink
            to={data.to}
            end
            onClick={collapseOnMobile}
            className={({ isActive }) =>
              `w-full cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-600 hover:text-white dark:text-slate-300 ${
                isActive ? "bg-slate-500 text-white" : ""
              }`
            }
          >
            <List classname={"flex items-center gap-2.5"}>
              <SpanText classname="shrink-0">
                <data.icon className="text-sm" />
              </SpanText>
              <SpanText
                classname={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                  effectiveIsSidebarExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                }`}
              >
                {data.text}
              </SpanText>
            </List>
          </NavLink>

          {/* Tooltip — only shows when collapsed */}
          <Group
            classname={`pointer-events-none absolute top-1 left-14 z-40 -translate-y-1/2 rounded-sm bg-slate-500 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 ${
              !effectiveIsSidebarExpanded ? "medium:block" : "hidden"
            }`}
          >
            {data.text}
          </Group>
        </Group>
      ))}
    </Nav>
  );
}
