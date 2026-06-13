import { Outlet } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Model from "/src/components/Model"
import Main from "/src/ui/Main";

import { useNav } from "/src/contexts/NavigationContext";

export default function AppLayout() {
  const { isMobileMenuOpen, closeMobileMenu } = useNav();

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
        <Outlet />
      </Main>
    </Container>
  );
}
