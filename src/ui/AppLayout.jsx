import { Outlet } from "react-router-dom";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";
import Slider from "/src/components/Slider";

export default function AppLayout() {
  return (
    // grid grid-cols-[14rem_1fr]
    <Container classname="defaultColor flex">
      <Slider />

      <Main classname="h-screen w-full">
        <Outlet />
      </Main>
    </Container>
  );
}
