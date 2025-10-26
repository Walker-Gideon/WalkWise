import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import MainNav from "/src/navigation/MainNav";
import Paragraph from "/src/ui/Paragraph";
import Logo from "/src/components/Logo";
import UserProfile from "./UserProfile";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";
import { useState } from "react";

export default function Slider() {
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
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Aside classname="borderStyling border-r h-screen flex flex-col justify-between">
      <Box adjustWidth={true}>
        <Header
          classname={
            "borderStyling border-b p-4 flex items-center justify-center"
          }
        >
          <Box classname={"rounded-sm bg-slate-50 p-2"}>
            <Logo />
          </Box>
        </Header>
        <MainNav />
      </Box>
      <Box classname={"borderStyling border-t p-4"}>
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
              width: 60,
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
        <UserProfile />
      </Box>
    </Aside>
  );
}
