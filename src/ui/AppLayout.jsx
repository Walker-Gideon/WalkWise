import { Outlet } from "react-router-dom";
import Slider from "./Slider";

export default function AppLayout() {
  return (
    <div className="defaultColor grid h-screen grid-cols-[14rem_1fr]">
      <Slider />

      <main className="h-screen">
        <Outlet />
      </main>
    </div>
  );
}
