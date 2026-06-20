import Main from "/src/ui/Main";
import Container from "/src/ui/Container";
import MessageInput from "./MessageInput";
import RenderMessage from "./RenderMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatMain({ messagesEndRef, handleSubmit }) {
  return (
    <Container
      adjust={true}
      classname={"relative flex h-full flex-1 flex-col overflow-hidden p-1"}
    >
      <Main classname={"scroll-container flex-1 overflow-y-auto pr-2"}>
        <RenderMessage />
        <TypingIndicator />
        <div ref={messagesEndRef} />
      </Main>
      <MessageInput handleSubmit={handleSubmit} />
    </Container>
  );
}
