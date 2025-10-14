import { Outlet } from "react-router-dom";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";
import Slider from "/src/components/Slider";

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
