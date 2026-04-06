import Box from "/src/ui/Box";
import Aside from "/src/ui/Aside";
import MainNav from "./components/MainNav";
import UserProfile from "/src/user/UserProfile";
import ThemeButton from "./components/ThemeButton";
import NavigationHeader from "./components/NavigationHeader";

import { useNav, NavigationContext } from "/src/contexts/NavigationContext";

export default function Slider({ menu }) {
  const { isExpanded } = useNav();

  const navValue = {
    ...useNav(),
    isExpanded: menu ? false : isExpanded,
  };

  return (
    <Aside
      classname={`borderStyling border-r h-screen flex flex-col justify-between transitiona-all duration-500 ${!menu && isExpanded ? "w-20" : "w-65"} ${menu ? "md:hidden z-50 defaultColor" : "md:flex hidden"}`}
    >
      <NavigationContext.Provider value={navValue}>
        <Box adjustWidth={true}>
          <NavigationHeader />
          <MainNav />
        </Box>
        <Box adjustWidth={true} classname={"borderStyling border-t p-4"}>
          <ThemeButton />
          <UserProfile />
        </Box>
      </NavigationContext.Provider>
    </Aside>
  );
}
