import * as motion from "motion/react-client";
import { LuSun, LuMoon } from "react-icons/lu";

import MainNav from "/src/navigation/MainNav";
import Logo from "/src/components/Logo";
import UserProfile from "./UserProfile";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
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
        {/* <LuMoon /> Dark mode */}
        {/*  
        <button
          onclick={toggleSwitch}
          // type="colors"
          // variant="motion"
          style={{
            justifyContent: "flex-" + (isOn ? "start" : "end"),
          }}
          // classname={"w-full flex items-center gap-2 text-sm"}
          className={
            "flex h-5 w-50 cursor-pointer rounded-[50%] bg-red-500 p-4"
          }
        >
          <motion.div
            className="toggle-handle"
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#9911ff",
              borderRadius: "50%",
            }}
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
        </button>*/}
        <button
          className="toggle-container"
          style={{
            width: 100,
            height: 50,
            backgroundColor: "rgba(66, 153, 225, 0.2)",
            borderRadius: 50,
            cursor: "pointer",
            display: "flex",
            padding: 10,
            justifyContent: "flex-" + (isOn ? "start" : "end"),
          }}
          onClick={toggleSwitch}
        >
          <motion.div
            className="toggle-handle"
            style={{
              width: 50,
              height: 50,
              backgroundColor: "rgb(66, 153, 225)",
              borderRadius: "50%",
            }}
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
        </button>
        <UserProfile />
      </Box>
    </Aside>
  );
}
