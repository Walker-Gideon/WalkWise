import MenuButton from "/src/navigation/components/MenuButton";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Conditional from "./Conditional"
import Header from "/src/ui/Header";
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
  return (
    <Header
      classname={`sticky top-0 z-30 border-b border-stone-300 shadow-sm backdrop-blur-sm  ${classname} ${theme ? "defaultColor dark:border-slate-700" : "bg-white/30"}`}
    >
      <Flex classname={`w-full py-4 ${menu ? "pl-4" : "px-6"}`}>
        <Conditional condition={menu}>
          <MenuButton />
        </Conditional>
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
