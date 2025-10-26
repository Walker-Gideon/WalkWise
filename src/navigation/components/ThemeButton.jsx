import { useState } from "react";
import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import Paragraph from "/src/ui/Paragraph";
import Group from "/src/ui/Group";

export default function ThemeButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  /*
    const [isDarkMode, setIsDarkMode] = useState(() => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) return JSON.parse(saved);
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    });
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);
  
    const toggleDarkMode = (id) => {
      if (id) {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
      }
    };
    */

  return (
    <div
      role="button"
      className={"mb-2 flex cursor-pointer items-center justify-between"}
      onClick={toggleSwitch}
    >
      <Group classname={"wrap-nowrap w-30"}>
        {isOn ? (
          <Paragraph type="xs" classname={"flex items-center gap-2"}>
            <LuSun /> Light mode
          </Paragraph>
        ) : (
          <Paragraph type="xs" classname={"flex items-center gap-2"}>
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
