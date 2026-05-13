import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

import Box from "/src/ui/Box";
import Header from "/src/ui/Header";
import Button from "/src/layout/Button";
import SpanText from "/src/ui/SpanText";
import Logo from "/src/components/Logo";
import Conditional from "/src/components/Conditional"

import { useNav } from "/src/contexts/NavigationContext";

export default function NavigationHeader({ showLabel }) {
  const { isExpanded, isMenuClick, setIsExpanded } = useNav();
  const effectiveIsExpanded = showLabel ? false : isExpanded;

  function handleIsExpanded() {
    setIsExpanded((show) => !show);
  }

  return (
    <Header
      classname={`borderStyling border-b ${showLabel ? "py-2" : "py-4"} flex items-center justify-center transition-all duration-500 ${effectiveIsExpanded ? "px-2" : "px-4"}`}
    >
      <Box classname={"rounded-sm py-2 flex items-center justify-between"}>
        <Box
          adjustWidth={true}
          classname={
            "flex items-center gap-1 font-bold text-slate-950 uppercase"
          }
        >
          <Logo show={true} />
          <SpanText
            classname={`font-bold text-slate-500 dark:text-slate-300 ${effectiveIsExpanded ? "hidden" : "block"}`}
          >
            walkwise
          </SpanText>
        </Box>
        <Conditional condition={!isMenuClick}>
          <Button 
            variant="text"
            ariaLabel="Toggle navigation menu"
            onClick={handleIsExpanded}>
            {effectiveIsExpanded ? (
              <LuCircleChevronRight className="icons" />
            ) : (
              <LuCircleChevronLeft className="icons" />
            )}
          </Button>
        </Conditional>
      </Box>
    </Header>
  );
}
