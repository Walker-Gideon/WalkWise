import ReactMarkdown from "react-markdown";
import { LuUser, LuBrain } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import SpanText from "/src/ui/SpanText";

import { useChat } from "/src/contexts/useChat.js";

export default function RenderMessage() {
  const { messages, isRefreshing } = useChat();

  return (
    <>
      {isRefreshing ? (
        <Spinner
          primary={true}
          styling={"h-100 w-full justify-center"}
          spinnerWidth="h-4 w-4"
          label="Refreshing..."
        />
      ) : (
        <Group>
          {messages.map((message) => (
            <Group
              key={message.id}
              classname={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <Group
                classname={`max-w-[70%] rounded-lg p-3 shadow-sm ${
                  message.sender === "user"
                    ? "rounded-br-none bg-slate-500 text-white"
                    : "rounded-bl-none bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white"
                }`}
              >
                <Flex classname={"mb-1 items-center"}>
                  {message.sender === "ai" && (
                    <LuBrain className="mr-2 h-4 w-4 text-slate-600 dark:text-slate-400" />
                  )}
                  {message.sender === "user" && (
                    <LuUser className="mr-2 h-4 w-4 text-white" />
                  )}
                  <SpanText classname={"text-sm font-semibold"}>
                    {message.sender === "user" ? "You" : "WalkWise AI"}
                  </SpanText>
                </Flex>
                <Group
                  classname={
                    "message-text prose prose-sm dark:prose-invert max-w-none"
                  }
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </Group>
              </Group>
            </Group>
          ))}
        </Group>
      )}
    </>
  );
}
