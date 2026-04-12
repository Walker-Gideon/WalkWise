import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import useTheme from "/src/hook/useTheme";

import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";

import { useNav } from "/src/contexts/NavigationContext";

export default function ThemeButton() {
  const { isExpanded } = useNav();
  const [theme, setTheme] = useTheme();

  // Initialize and sync isOn with the actual DOM theme
  const [isOn, setIsOn] = useState(() => {
    if (typeof document !== "undefined") {
      return !document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    setIsOn(!document.documentElement.classList.contains("dark"));
  }, [theme]);

  const selectedTheme = isOn ? "dark" : "light";

  const toggleSwitch = () => setIsOn(!isOn);
  const handleTheme = (themeValue) => {
    setTheme(themeValue);
  };

  return (
    <div
      role="button"
      className={`flex cursor-pointer items-center justify-between`}
      onClick={() => {
        toggleSwitch();
        handleTheme(selectedTheme);
      }}
    >
      <Group
        classname={`text-nowrap w-30 text-slate-900 dark:text-slate-300 ${
          isExpanded ? "hidden" : "block"
        }`}
      >
        {!isOn ? (
          <Paragraph
            type="xs"
            classname={"flex items-center font-semibold gap-2"}
          >
            <LuSun /> Light mode
          </Paragraph>
        ) : (
          <Paragraph
            type="xs"
            classname={"flex items-center font-semibold gap-2"}
          >
            <LuMoon /> Dark mode
          </Paragraph>
        )}
      </Group>
      <button
        type="button"
        className="bg-slate-200 dark:bg-slate-700"
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
          e.stopPropagation(); // Prevent double trigger since div also has onClick
          toggleSwitch();
          handleTheme(selectedTheme);
        }}
      >
        <motion.div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
          }}
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
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