import { Outlet } from "react-router-dom";
import Container from "/src/ui/Container";
import Slider from "/src/ui/Slider";
import Main from "/src/ui/Main";

export default function AppLayout() {
  return (
    <Container classname="defaultColor grid grid-cols-[14rem_1fr]">
      <Slider />

      <Main classname="h-screen">
        <Outlet />
      </Main>
    </Container>
  );
}
