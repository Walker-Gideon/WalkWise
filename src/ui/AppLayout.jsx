import { Outlet } from "react-router-dom";

import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

import { useNav } from "/src/contexts/NavigationContext";

export default function AppLayout() {
  const { isExpanded } = useNav();

  return (
    <Container
      classname={`defaultColor flex overflow-hidden ${isExpanded ? "" : ""}`}
    >
      <Slider />

      <Main
        classname={"h-screen w-full bg-slate-50 dark:bg-slate-800 transition"}
      >
        <Outlet />
      </Main>
    </Container>
  );
}
