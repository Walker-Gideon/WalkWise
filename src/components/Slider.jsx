import { LuSun, LuMoon } from "react-icons/lu";
import MainNav from "/src/navigation/MainNav";
import Logo from "/src/components/Logo";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Aside from "/src/ui/Aside";
import Box from "/src/ui/Box";

export default function Slider() {
  return (
    <Aside classname="borderStyling border-r w-[20%]">
      <Header
        classname={
          "borderStyling border-b p-4 flex items-center justify-center"
        }
      >
        <Box // dark:bg-slate-700
          classname={"rounded-sm bg-slate-50 p-2"}
        >
          <Logo />
        </Box>
      </Header>
      <MainNav />
      {/* bottom navigation */}
      <Box classname={"bg-amber-400 p-4"}>
        <Button>
          <LuMoon />
        </Button>
      </Box>
    </Aside>
  );
}
