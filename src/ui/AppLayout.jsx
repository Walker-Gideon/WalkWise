import { Outlet } from "react-router-dom";
import Slider from "/src/navigation/Slider";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";
import { useState } from "react";

export default function AppLayout() {
  const [adjustNavigationWidth, setAdjustNavigationWidth] = useState(false);

  return (
    <Container
      // grid grid-rows-[auto_1fr]  ${adjustNavigationWidth ? "grid-cols-[auto_1fr]" : "grid-cols-[14rem_1fr]"}
      classname={`defaultColor flex ${adjustNavigationWidth ? "" : ""}`}
    >
      <Slider
        adjustNavigationWidth={adjustNavigationWidth}
        setAdjustNavigationWidth={setAdjustNavigationWidth}
      />

      <Main classname={"h-screen w-full"}>
        <Outlet />
      </Main>
    </Container>
  );
}
