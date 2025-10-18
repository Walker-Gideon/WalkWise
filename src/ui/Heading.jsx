import Header from "./Header";
import Flex from "/src/ui/Flex";

export default function Heading({ children, classname }) {
  return (
    <Header
      classname={`medium:block sticky top-0 z-40 hidden border-b border-stone-300 bg-white/30 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80 ${classname}`}
    >
      <Flex classname={"px-6 py-4"}>{children}</Flex>
    </Header>
  );
}
