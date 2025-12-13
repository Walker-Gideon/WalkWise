import { Outlet } from "react-router-dom";

import Conditional from "/src/components/Conditional"
import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Model from "/src/components/Model"
import Main from "/src/ui/Main";

import { useNav } from "/src/contexts/NavigationContext";

export default function AppLayout() {
  const { isMenuClick, setIsMenuClick } = useNav();

   function handleToggle() {
        setIsMenuClick(false)
    }

  return (
    <Container
      classname={`defaultColor flex overflow-hidden`}
    >
      <Conditional condition={!isMenuClick}>
        <Slider />
      </Conditional>
      <Conditional condition={isMenuClick}>
        <Model 
          menu={true} 
          styling={"md:hidden"}
          onClick={handleToggle} 
        >
         <Slider />
        </Model>
      </Conditional>

      <Main
        classname={"h-screen w-full bg-slate-50 dark:bg-slate-800 transition"}
      >
        <Outlet />
      </Main>
    </Container>
  );
}
