import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "motion/react";
import { LuMessageCircle, LuCheck } from "react-icons/lu";

import Main from "/src/ui/Main";
import Button from "/src/ui/Button";
import Model from "/src/components/Model";
import Container from "/src/ui/Container";
import Slider from "/src/navigation/Slider";
import ChatLayout from "/src/features/chat/ChatLayout";

import { useNav } from "/src/contexts/NavigationContext";
import { useChat } from "/src/contexts/useChat.js";

export default function AppLayout() {
  const { isMobileMenuOpen, closeMobileMenu } = useNav();
  const { toggleChat } = useChat();
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <Container classname={`defaultColor relative flex overflow-hidden`}>
      <Slider menu={false} />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Model
            menu={true}
            styling={"md:hidden"}
            onClick={closeMobileMenu}
            key="mobile-menu"
          >
            <Slider menu={true} />
          </Model>
        )}
      </AnimatePresence>

      <Main
        classname={
          "h-full w-full overflow-y-auto bg-slate-50 dark:bg-slate-800 transition"
        }
      >
        <AnimatePresence>
          <Motion.section
            key={location.pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full"
          >
            <Outlet />
          </Motion.section>
        </AnimatePresence>
      </Main>

      <AnimatePresence>
        <ChatLayout />
      </AnimatePresence>

      <button
        onClick={toggleChat}
        className={`medium:right-8 absolute right-5 bottom-5 cursor-pointer rounded-full bg-slate-500 p-3.5 text-white transition-colors duration-300 hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-500`}
      >
        <LuMessageCircle size={23} />
      </button>
    </Container>
  );
}
