import { LuUser } from "react-icons/lu";

import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import Conditional from "./Conditional"
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import MenuButton from "/src/navigation/components/MenuButton";

import { useUserData } from "/src/user/hook/useUserData";

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
  const { userData } = useUserData();

  return (
    <Header
      classname={`sticky top-0 z-30 border-b border-stone-300 shadow-sm backdrop-blur-sm  ${classname} ${theme ? "defaultColor dark:border-slate-700" : "bg-white/30"}`}
    >
      <Flex classname={`w-full py-3 medium:py-4 ${menu ? "pl-4 pr-6 items-center" : "px-6"}`}>
        <Conditional condition={menu}>
          <MenuButton />
        </Conditional>
        <Flex variant="between" classname={`w-full ${menu ? "pl-2" : ""}`}>
          <Group>
            <div className="block md:hidden">
              <Small 
                paragraphStyling={paragraphStyling} 
                paragraphText={paragraphText} 
              />
            </div>
            <div className="hidden md:block">
              <Large
                headerStyling={headerStyling} 
                headerText={headerText}
                paragraphStyling={paragraphStyling} 
                paragraphText={paragraphText}
              />
            </div>
          </Group>
          <Group classname={groupStyling}>{children}</Group>
        </Flex>
        {/* Here we need to add the user profile */}
        <Conditional condition={menu}>
          <div>
            <Box
              adjustWidth={true}
              classname={
                "rounded-full flex items-center justify-center h-12 w-12 border-2 borderStyling md:hidden"
              }
              >
                <Conditional condition={!userData?.photoURL}>
                  <LuUser
                    className={`h-5 w-5 text-slate-500 dark:text-white`}
                  />
                </Conditional>
                <Conditional condition={userData?.photoURL}>
                  <div>
                  <img
                    src={userData?.photoURL}
                    alt="User profile"
                    className="h-15 w-15 rounded-full object-cover"
                  /> 
                  </div>
                </Conditional>
            </Box>
          </div>
        </Conditional>
      </Flex>
    </Header>
  );
}

function Small ({ paragraphStyling, paragraphText }) {
  return (
    <>
      <HeaderText type="primary">
        WalkWise
      </HeaderText>
      <Paragraph
        variant="small"
        classname={`secondary-text-color whitespace-nowrap truncate smallest:w-60 sm:w-70 medium:w-96 ${paragraphStyling}`}
      >
        {paragraphText}
      </Paragraph>
    </>
  );
}

function Large ({ headerStyling, headerText, paragraphStyling, paragraphText }) {
  return (
    <>
      <HeaderText type="primary" classname={`${headerStyling}`}>
        {headerText}
      </HeaderText>
      <Paragraph
        variant="small"
        classname={`secondary-text-color ${paragraphStyling}`}
      >
        {paragraphText}
      </Paragraph>
    </>
  );
}
