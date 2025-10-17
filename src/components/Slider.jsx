import { LuSun, LuMoon } from "react-icons/lu";
import MainNav from "/src/navigation/MainNav";
import Logo from "/src/components/Logo";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";
import UserProfile from "./UserProfile";

export default function Slider() {
  return (
    <Aside classname="borderStyling border-r w-[20%]">
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
      <Box classname={"borderStyling border-t p-4"}>
        <Button
          onclick={() => {}}
          type="colors"
          classname={"w-full flex items-center gap-2 text-sm"}
        >
          <LuMoon /> Dark mode
        </Button>
        <UserProfile />
      </Box>
    </Aside>
  );
}
