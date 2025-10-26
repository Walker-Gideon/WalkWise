import { useNav } from "/src/contexts/NavigationContext";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

import Logo from "/src/components/Logo";
import Button from "/src/ui/Button";
import Header from "/src/ui/Header";
import Box from "/src/ui/Box";

export default function NavigationHeader() {
  const { isExpanded, setIsExpanded } = useNav();

  function handleIsExpanded() {
    setIsExpanded((show) => !show);
  }

  return (
    <Header
      classname={`borderStyling border-b py-4 flex items-center justify-center transition-all duration-500 ${isExpanded ? "px-2" : "px-4"}`}
    >
      <Box classname={"rounded-sm py-2 flex items-center justify-between"}>
        <Logo />
        <Button variant="secondary" onclick={handleIsExpanded}>
          {isExpanded ? (
            <LuCircleChevronRight className="icons" />
          ) : (
            <LuCircleChevronLeft className="icons" />
          )}
        </Button>
      </Box>
    </Header>
  );
}
