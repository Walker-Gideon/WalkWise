import ThemeButton from "./components/ThemeButton";
import UserProfile from "/src/user/UserProfile";
import MainNav from "./components/MainNav";
import Logo from "/src/components/Logo";
import Header from "/src/ui/Header";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";

export default function Slider() {
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
        <ThemeButton />
        <UserProfile />
      </Box>
    </Aside>
  );
}
