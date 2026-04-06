/*
import { useState } from "react";
import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import useTheme from "/src/hook/useTheme";

import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";

import { useNav } from "/src/contexts/NavigationContext";
import { useThemeContext } from "/src/contexts/ThemeContext"

export default function ThemeButton() {
  const { isExpanded } = useNav();
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useTheme();

  const selectedTheme = isOn ? "light" : "dark";

  const toggleSwitch = () => setIsOn(!isOn);
  const handleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <div
      role="button"
      className={`flex cursor-pointer items-center justify-between`}
      onClick={() => {
        toggleSwitch;
        handleTheme(selectedTheme);
      }}
    >
      <Group
        classname={`text-nowrap w-30 text-slate-900 dark:text-slate-300 ${isExpanded ? "hidden" : "block"}`}
      >
        {isOn ? (
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
        className="bg-slate-200"
        style={{
          width: 55,
          height: 28,
          borderRadius: 50,
          cursor: "pointer",
          display: "flex",
          padding: 4,
          justifyContent: "flex-" + (isOn ? "start" : "end"),
        }}
        onClick={toggleSwitch}
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
          className="flex items-center justify-center bg-slate-500"
        >
          {isOn ? (
            <LuSun className="h-3 w-3 text-white" />
          ) : (
            <LuMoon className="h-3 w-3 text-white" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
*/

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import { useThemeContext } from "/src/contexts/ThemeContext";
import { useNav } from "/src/contexts/NavigationContext";

import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";

export default function ThemeButton() {
  const { isExpanded } = useNav();
  const { resolvedTheme, setTheme } = useThemeContext();

  const [isOn, setIsOn] = useState(false);

  // Sync switch with actual theme
  useEffect(() => {
    setIsOn(resolvedTheme === "light");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      role="button"
      className="flex cursor-pointer items-center justify-between w-full"
      onClick={toggleTheme}
    >
      {/* Label */}
      <Group
        classname={`text-nowrap w-30 text-slate-900 dark:text-slate-300 ${
          isExpanded ? "hidden" : "block"
        }`}
      >
        {isOn ? (
          <Paragraph
            type="xs"
            classname="flex items-center font-semibold gap-2"
          >
            <LuSun /> Light mode
          </Paragraph>
        ) : (
          <Paragraph
            type="xs"
            classname="flex items-center font-semibold gap-2"
          >
            <LuMoon /> Dark mode
          </Paragraph>
        )}
      </Group>

      {/* Toggle Switch */}
      <button
        type="button"
        className="bg-slate-200 dark:bg-slate-700"
        style={{
          width: 55,
          height: 28,
          borderRadius: 50,
          padding: 4,
        }}
        onClick={toggleTheme}
      >
        <motion.div
          style={{ width: 20, height: 20, borderRadius: "50%" }}
          animate={{ marginLeft: isOn ? 0 : "auto" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="flex items-center justify-center bg-slate-500 dark:bg-slate-300"
        >
          {isOn ? (
            <LuSun className="h-3 w-3 text-white" />
          ) : (
            <LuMoon className="h-3 w-3 text-white" />
          )}
        </motion.div>
      </button>
    </div>
  );
}