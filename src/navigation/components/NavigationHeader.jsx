import { LuCircleChevronLeft } from "react-icons/lu";
import { LuCircleChevronRight } from "react-icons/lu";

import Logo from "/src/components/Logo";
import Button from "/src/ui/Button";
import Header from "/src/ui/Header";
import Box from "/src/ui/Box";
// import useNavigationAWidth from "../../hook/useNavigationAWidth";

export default function NavigationHeader({ setAdjustNavigationWidth }) {
  //   const { setAdjustNavigationWidth } = useNavigationAWidth();
  return (
    <Header
      classname={"borderStyling border-b p-4 flex items-center justify-center"}
    >
      <Box classname={"rounded-sm py-2 flex items-center justify-between"}>
        <Logo />
        <Button
          variant="secondary"
          classname={""}
          onclick={() => {
            setAdjustNavigationWidth((show) => !show);
            console.log("menu click");
          }}
        >
          <LuCircleChevronLeft className="icons" />
          {/* <LuCircleChevronRight /> */}
        </Button>
      </Box>
    </Header>
  );
}
