import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Model from "/src/components/Model"
import Main from "/src/ui/Main";

import { useNav } from "/src/contexts/NavigationContext";

export default function AppLayout() {
  const { isMobileMenuOpen, closeMobileMenu } = useNav();
  const location = useLocation();

  return (
    <Container
      classname={`defaultColor flex overflow-hidden`}
    >
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
        classname={"h-full w-full overflow-y-auto bg-slate-50 dark:bg-slate-800 transition"}
      >
        <AnimatePresence mode="wait">
          <motion.section
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="h-full"
          >
            <Outlet />
          </motion.section>
        </AnimatePresence>
      </Main>
    </Container>
  );
}
