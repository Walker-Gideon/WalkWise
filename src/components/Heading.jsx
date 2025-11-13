import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
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
}) {
  return (
    <Header
      // dark:border-slate-700 dark:bg-slate-800/80 medium:block hidden
      classname={`sticky top-0 z-40 border-b border-stone-300 shadow-sm backdrop-blur-sm  ${classname} ${theme ? "bg-white dark:bg-slate-900" : "bg-white/30"}`}
    >
      <Flex variant="between" classname={"px-6 py-4"}>
        <Group>
          <HeaderText type="primary" classname={headerStyling}>
            {headerText}
          </HeaderText>
          <Paragraph variant="small" classname={paragraphStyling}>
            {paragraphText}
          </Paragraph>
        </Group>
        <Group classname={groupStyling}>{children}</Group>
      </Flex>
    </Header>
  );
}
