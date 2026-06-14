import { createContext, useState } from "react";

export const ChatContext = createContext();

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
    openChat: () => setIsChatShow(true),
    closeChat: () => setIsChatShow(false),
    startTyping: () => setIsTyping(true),
    stopTyping: () => setIsTyping(false),
    toggleChat: () => setIsChatShow((prev) => !prev),

    inputMessage,
    setInputMessage,

    isTyping,
    messages,
    isRefreshing,

    addMessage: (message) =>
      setMessages((prev) => [...prev, { id: Date.now(), ...message }]),

    refreshChat: () => {
      setIsRefreshing(true);
      setMessages([
        {
          id: 1,
          text: "Hello! How can I assist you with your studies today?",
          sender: "ai",
        },
      ]);
      setTimeout(() => setIsRefreshing(false), 500);
    },
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export default ChatProvider;
