import { Outlet } from "react-router-dom";

import { useNav } from "/src/contexts/NavigationContext";
import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function AppLayout() {
  const { isExpanded } = useNav();

  return (
    <Container
      // grid grid-rows-[auto_1fr]  ${adjustNavigationWidth ? "grid-cols-[auto_1fr]" : "grid-cols-[14rem_1fr]"}
      classname={`defaultColor flex overflow-hidden ${isExpanded ? "" : ""}`}
    >
      <Slider />

      <Main classname={"h-screen w-full bg-slate-50 dark:bg-slate-700"}>
        <Outlet />
      </Main>
    </Container>
  );
}
