import {
  LuLayoutDashboard,
  LuBookOpen,
  LuRectangleVertical,
  LuCalendar,
  LuLightbulb,
  LuSettings2,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import UnorderedList from "/src/ui/UnorderedList";
import SpanText from "/src/ui/SpanText";
import List from "/src/ui/List";
import Nav from "/src/ui/Nav";

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
    <Nav classname={"bg-red-500"}>
      {buttonsData.map((data, index) => (
        <UnorderedList
          key={index}
          classname={`flex flex-col gap-2 ${index === 0 || index === 5 ? `` : `py-2`}`}
        >
          <NavLink
            to={data.to}
            className={({ isActive }) =>
              `cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-600 hover:text-white ${isActive ? "bg-slate-500 text-white" : ""}`
            }
          >
            <List classname={"flex items-center gap-2.5"}>
              <SpanText>{<data.icon />}</SpanText>
              <SpanText>{data.text}</SpanText>
            </List>
          </NavLink>
        </UnorderedList>
      ))}
    </Nav>
  );
}
