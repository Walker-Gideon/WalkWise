import { LuBrain } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";

import { useChat } from "/src/contexts/useChat.js";

export default function TypingIndicator() {
  const { isTyping } = useChat();

  if (!isTyping) return null;

  return (
    <Flex classname={"mb-4 justify-start"}>
      <Group
        classname={
          "max-w-[70%] rounded-lg rounded-bl-none bg-slate-100 p-3 text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
        }
      >
        <Flex classname={"mb-1 items-center"}>
          <LuBrain className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
          <SpanText classname={"text-sm font-semibold"}>WalkWise AI</SpanText>
        </Flex>
        <Paragraph variant="small" classname="animate-pulse">
          Typing...
        </Paragraph>
      </Group>
    </Flex>
  );
}
