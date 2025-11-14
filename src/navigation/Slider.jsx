// import { LuPanelLeft, LuMenu } from "react-icons/lu";

import { useNav } from "/src/contexts/NavigationContext";

import NavigationHeader from "./components/NavigationHeader";
import ThemeButton from "./components/ThemeButton";
import UserProfile from "/src/user/UserProfile";
import MainNav from "./components/MainNav";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";

export default function Slider() {
  const { isExpanded } = useNav();

  return (
    <Aside
      classname={`borderStyling medium:flex hidden border-r h-screen flex flex-col justify-between transitiona-all duration-500 ${isExpanded ? "w-20" : "w-65"}`}
    >
      <Box adjustWidth={true}>
        <NavigationHeader />
        <MainNav />
      </Box>
      <Box adjustWidth={true} classname={"borderStyling border-t p-4"}>
        <ThemeButton />
        <UserProfile />
      </Box>
    </Aside>
  );
}
