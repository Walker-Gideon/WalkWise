import NavigationHeader from "./components/NavigationHeader";
import ThemeButton from "./components/ThemeButton";
import UserProfile from "/src/user/UserProfile";
import MainNav from "./components/MainNav";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";

export default function Slider() {
  return (
    <Aside classname="borderStyling border-r h-screen flex flex-col justify-between">
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
