import { createContext, useState } from "react";

export const ChatContext = createContext();
import { useChat } from "./useChat";

export function ChatProvider({ children }) {
  const [isChatShow, setIsChatShow] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you with your studies today?",
      sender: "ai",
    },
  ]);

  const value = {
    isChatShow,
    setIsChatShow,
    inputMessage,
    setInputMessage,
    isTyping,
    setIsTyping,
    messages,
    setMessages,
    isRefreshing,
    setIsRefreshing,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export default ChatProvider;
