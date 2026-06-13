import { NavLink } from "react-router-dom";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import Conditional from "./Conditional"
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import UserImage from "/src/user/components/UserImage";
import MenuButton from "/src/navigation/components/MenuButton";

export default function Heading({
  theme,
  children,
  classname,
  headerText,
  groupStyling,
  paragraphText,
  headerStyling,
  paragraphStyling,
  menu = true,
}) {
  return (
    <Header
      classname={`sticky top-0 z-30 border-b border-stone-300 shadow-sm backdrop-blur-sm  ${classname} ${theme ? "defaultColor dark:border-slate-700" : "bg-white/30"}`}
    >
      <Flex classname={`w-full flex-1 py-3 medium:py-4 ${menu ? "pl-4 pr-6 items-center" : "px-6"}`}>
        <Conditional condition={menu}>
          <MenuButton />
        </Conditional>
        <Flex variant="between" classname={`flex-1 ${menu ? "pl-2" : ""}`}>
          <Group classname={"w-60 min-w-0 medium:w-full truncate"}>
            <Content
              headerStyling={headerStyling} 
              headerText={headerText}
              paragraphStyling={paragraphStyling} 
              paragraphText={paragraphText}
            />
          </Group>
          <Group classname={groupStyling}>{children}</Group>
        </Flex>
        <Conditional condition={menu}>
          <NavLink to="/profile" aria-label="Go to profile" className="inline-flex">
            <UserImage hideOnMobile={true} />
          </NavLink>
        </Conditional>
      </Flex>
    </Header>
  );
}


function Content ({ headerStyling, headerText, paragraphStyling, paragraphText }) {
  return (
    <>
      <HeaderText type="primary" classname={`truncate max-w-full ${headerStyling}`}>
        {headerText}
      </HeaderText>
      <Paragraph
        variant="small"
        classname={`secondary-text-color truncate whitespace-nowrap max-w-full smallest:w-60 sm:w-70 medium:w-96 ${paragraphStyling}`}
      >
        {paragraphText}
      </Paragraph>
    </>
  );
}

