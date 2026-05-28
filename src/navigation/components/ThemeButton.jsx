import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";

import { useNav } from "/src/contexts/NavigationContext";
import { useThemeContext } from "/src/contexts/ThemeContext";

export default function ThemeButton({ showLabel }) {
  const { isExpanded } = useNav();
  const { theme, setTheme } = useThemeContext();

  const isOn = theme === "system" 
    ? !document.documentElement.classList.contains("dark")
    : theme === "light";

  const effectiveIsExpanded = showLabel ? false : isExpanded;

  const handleToggle = () => {
    setTheme(isOn ? "dark" : "light");
  };

  return (
    <div
      role="button"
      className={`flex cursor-pointer items-center transition-all duration-300 ${
        effectiveIsExpanded ? "justify-between px-2" : "justify-center px-0"
      }`}
      onClick={handleToggle}
    >
      <Group
        classname={`overflow-hidden whitespace-nowrap text-slate-900 dark:text-slate-300 transition-all duration-300 ${
          effectiveIsExpanded ? "opacity-100 w-auto mr-2" : "opacity-0 w-0"
        }`}
      >
        {!isOn ? (
          <Paragraph type="xs" classname={"flex items-center font-semibold gap-2"}>
            <LuSun /> Light mode
          </Paragraph>
        ) : (
          <Paragraph type="xs" classname={"flex items-center font-semibold gap-2"}>
            <LuMoon /> Dark mode
          </Paragraph>
        )}
      </Group>

      <button
        type="button"
        className="shrink-0 bg-slate-200 dark:bg-slate-700"
        style={{
          width: 55,
          height: 28,
          borderRadius: 50,
          cursor: "pointer",
          display: "flex",
          padding: 4,
          justifyContent: "flex-" + (isOn ? "start" : "end"),
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
      >
        <motion.div
          style={{ width: 20, height: 20, borderRadius: "50%" }}
          layout
          transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
          className="flex items-center justify-center bg-slate-500 dark:bg-slate-300"
        >
          {!isOn ? (
            <LuSun className="h-3 w-3 text-white dark:text-slate-800" />
          ) : (
            <LuMoon className="h-3 w-3 text-white dark:text-slate-800" />
          )}
        </motion.div>
      </button>
    </div>
  );
}