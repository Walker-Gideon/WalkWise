import { useEffect, useRef } from "react";
import { motion as Motion } from "motion/react";

import ChatMain from "./ChatMain";
import ChatHeader from "./ChatHeader";
import Container from "/src/ui/Container";

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
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

  const createSystemPrompt = (userInput) =>
    `You are WalkWise AI, the study assistant built into WalkWise — an app students use to manage flashcards, notes, and study sessions.

    Your role is strictly to help with:
    - Explaining academic concepts and subjects
    - Study techniques, learning strategies, and exam preparation
    - Breaking down complex topics into understandable parts
    - Helping organize study plans and schedules
    - Answering questions directly related to coursework

    You do not have access to real-time information (news, sports scores, current events, live data) — if asked about these, briefly say you don't have real-time access and redirect the conversation back to how you can help with their studies, rather than attempting to answer.

    If a question is completely unrelated to studying or academics (entertainment, personal advice unrelated to school, etc.), politely acknowledge it but steer the conversation back to study-related help.

    If the user gives a vague or unclear answer, ask a clarifying follow-up before proceeding, rather than assuming.

    Stay encouraging, clear, and focused — like a good tutor who keeps the student on track.

    The user says:\n"${userInput}"`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    const currentInput = inputMessage;

    addMessage({ text: currentInput, sender: "user" });
    setInputMessage("");
    startTyping();

    try {
      const response = await fetch(
        "https://walkwise-proxy.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              ...buildHistory(),
              { role: "user", content: createSystemPrompt(currentInput) },
            ],
          }),
        },
      );

      const responseData = await response.json();
      const aiText =
        responseData.choices?.[0]?.message?.content ||
        "I couldn't generate a response. Please try again.";

      addMessage({ text: aiText, sender: "ai" });
    } catch (error) {
      console.error("Proxy error:", error);
      addMessage({
        text: "Something went wrong. Please check your connection and try again.",
        sender: "ai",
      });
    } finally {
      stopTyping();
    }
  };

  return (
    <Motion.div
      animate={{ x: isChatShow ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className={
        "medium:w-90 defaultColor absolute top-0 right-0 z-50 w-full border-l border-stone-300 shadow-2xl dark:border-slate-700 dark:shadow-slate-700"
      }
    >
      <Container classname={"flex flex-col overflow-hidden px-4 py-2"}>
        <ChatHeader />
        <ChatMain handleSubmit={handleSubmit} messagesEndRef={messagesEndRef} />
      </Container>
    </Motion.div>
  );
}
