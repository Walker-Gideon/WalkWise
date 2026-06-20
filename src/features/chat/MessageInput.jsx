import { LuSendHorizontal } from "react-icons/lu";

import Form from "/src/ui/Form";
import TextArea from "/src/ui/TextArea";
import Container from "/src/ui/Container";

import { useChat } from "/src/contexts/useChat.js";

export default function MessageInput({ handleSubmit }) {
  const { inputMessage, setInputMessage, isTyping } = useChat();

  return (
    <Container adjust={true} classname={"px-0.5 pt-2"}>
      <Form onsubmit={handleSubmit} classname={"flex items-center space-x-2"}>
        <TextArea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your question here..."
          classname={
            "h-12 flex-1 resize-none overflow-hidden rounded-sm border border-stone-300 bg-slate-50 p-3 text-sm text-slate-900 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-slate-500"
          }
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.target.form.requestSubmit();
            }
          }}
          disabled={isTyping}
          resize={true}
        />
        <button
          type="submit"
          className="rounded-sm bg-slate-500 p-3 text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-80"
          disabled={inputMessage.trim() === "" || isTyping}
        >
          <LuSendHorizontal className="h-6 w-6" />
        </button>
      </Form>
    </Container>
  );
}
