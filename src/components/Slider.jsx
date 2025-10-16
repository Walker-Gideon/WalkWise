import MainNav from "/src/navigation/MainNav";
import Logo from "/src/components/Logo";
import Header from "/src/ui/Header";
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
    </Aside>
  );
}
