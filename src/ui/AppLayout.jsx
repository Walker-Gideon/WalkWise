import { Outlet } from "react-router-dom";
import Slider from "/src/components/Slider";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function AppLayout() {
  return (
    <Container classname={"defaultColor grid grid-cols-[14rem_1fr]"}>
      <Slider />

      <Main classname={"h-screen w-full"}>
        <Outlet />
      </Main>
    </Container>
  );
}
