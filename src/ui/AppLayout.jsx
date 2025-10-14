import { Outlet } from "react-router-dom";
import Container from "./Container";
import Slider from "./Slider";

export default function AppLayout() {
  return (
    <Container classname="defaultColor grid grid-cols-[14rem_1fr]">
      <Slider />

      <main className="h-screen">
        <Outlet />
      </main>
    </Container>
  );
}
