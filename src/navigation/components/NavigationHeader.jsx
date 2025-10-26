import { LuCircleChevronLeft } from "react-icons/lu";
import { LuCircleChevronRight } from "react-icons/lu";

import Logo from "/src/components/Logo";
import Button from "/src/ui/Button";
import Header from "/src/ui/Header";
import Box from "/src/ui/Box";

export default function NavigationHeader() {
  return (
    <Header
      classname={"borderStyling border-b p-4 flex items-center justify-center"}
    >
      <Box classname={"rounded-sm py-2 flex items-center justify-between"}>
        <Logo />
        <Button variant="secondary" classname={""} onclick={() => {}}>
          <LuCircleChevronLeft className="icons" />
          {/* <LuCircleChevronRight /> */}
        </Button>
      </Box>
    </Header>
  );
}
