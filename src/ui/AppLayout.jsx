import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "motion/react";

import Main from "/src/ui/Main";
import Model from "/src/components/Model";
import Container from "/src/ui/Container";
import Slider from "/src/navigation/Slider";

import { useNav } from "/src/contexts/NavigationContext";

export default function AppLayout() {
  const { isMobileMenuOpen, closeMobileMenu } = useNav();
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <Container classname={`defaultColor flex overflow-hidden`}>
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
    </Container>
  );
}
