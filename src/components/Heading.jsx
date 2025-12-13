import { LuPanelLeft, LuMenu } from "react-icons/lu";
import { BiMenuAltLeft } from "react-icons/bi";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function Heading({
  children,
  headerText,
  paragraphText,
  headerStyling,
  paragraphStyling,
  groupStyling,
  classname,
  theme,
  menu = true,
}) {
  function handleToggle() {}

  return (
    <Header
      classname={`sticky top-0 z-40 border-b border-stone-300 shadow-sm backdrop-blur-sm  ${classname} ${theme ? "defaultColor dark:border-slate-700" : "bg-white/30"}`}
    >
      <Flex classname={`w-full py-4 ${menu ? "pl-4" : "px-6"}`}>
        {menu && 
          <Button 
            variant="secondary"
            onclick={handleToggle} 
            classname={"md:hidden h-8 p-1 my-2 rounded-sm hover:bg-slate-100 transition-colors duration-300 dark:hover:bg-slate-800"}
          >
            <BiMenuAltLeft className="secondary-text-color h-6 w-6" />
          </Button>
        }
        <Flex variant="between" classname={`w-full ${menu ? "pl-4 pr-6" : ""}`}>
          <Group>
            <HeaderText type="primary" classname={headerStyling}>
              {headerText}
            </HeaderText>
            <Paragraph
            variant="small"
            classname={`secondary-text-color ${paragraphStyling}`}
          >
            {paragraphText}
          </Paragraph>
        </Group>
        <Group classname={groupStyling}>{children}</Group>
      </Flex>
      </Flex>
    </Header>
  );
}
