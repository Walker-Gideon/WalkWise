import MessageInput from "./MessageInput";
import RenderMessage from "./RenderMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatMain({ messagesEndRef, handleSubmit }) {
  return (
    <div className="relative flex h-screen flex-1 flex-col overflow-hidden p-1">
      <div className="scroll-container flex-1 overflow-y-auto pr-2">
        <RenderMessage />
        <TypingIndicator />
        <div ref={messagesEndRef} />
      </div>
      <MessageInput handleSubmit={handleSubmit} />
    </div>
  );
}
