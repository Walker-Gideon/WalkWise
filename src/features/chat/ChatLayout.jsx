import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import ChatMain from "./ChatMain";
import ChatHeader from "./ChatHeader";

import { useChat } from "/src/contexts/useChat.js";

export default function ChatLayout() {
  const {
    isChatShow,
    messages,
    inputMessage,
    setInputMessage,
    addMessage,
    startTyping,
    stopTyping,
  } = useChat();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const buildHistory = () =>
    messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

  const createSystemPrompt = (userInput) =>
    `You are WalkWise AI, a helpful study assistant. The user says:\n"${userInput}"`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    const currentInput = inputMessage;

    addMessage({ text: currentInput, sender: "user" });
    setInputMessage("");
    startTyping();

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_CHAT_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              ...buildHistory(),
              {
                role: "user",
                parts: [{ text: createSystemPrompt(currentInput) }],
              },
            ],
          }),
        },
      );

      const responseData = await response.json();
      const aiText =
        responseData.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't generate a response. Please try again.";

      addMessage({ text: aiText, sender: "ai" });
    } catch (error) {
      console.error("Gemini error:", error);
      addMessage({
        text: "Something went wrong. Please check your connection and try again.",
        sender: "ai",
      });
    } finally {
      stopTyping();
    }
  };

  return (
    <motion.div
      animate={{ x: isChatShow ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="medium:w-90 defaultColor absolute top-0 right-0 z-50 w-full border-l border-stone-300 shadow-2xl dark:border-slate-700 dark:shadow-slate-700"
    >
      <div className="flex min-h-screen flex-col px-4 py-2">
        <ChatHeader />
        <ChatMain handleSubmit={handleSubmit} messagesEndRef={messagesEndRef} />
      </div>
    </motion.div>
  );
}
