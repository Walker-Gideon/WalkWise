import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function Heading({ children, classname }) {
  return (
    <Header
      // dark:border-slate-700 dark:bg-slate-800/80 medium:block hidden
      classname={`sticky top-0 z-40 border-b border-stone-300 bg-white/30 shadow-sm backdrop-blur-sm  ${classname}`}
    >
      <Flex variant="between" classname={"px-6 py-4"}>
        <Group>
          <HeaderText //dark:text-white
            classname={"text-xl font-bold text-slate-900"}
          >
            Welcome,&nbsp; username
          </HeaderText>
          <Paragraph classname={"text-sm text-slate-500"}>
            Glad to have you on board.
          </Paragraph>
        </Group>
        <Group>{children}</Group>
      </Flex>
    </Header>
  );
}
