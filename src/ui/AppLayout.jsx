import { Outlet } from "react-router-dom";
import Slider from "./Slider";

export default function AppLayout() {
  return (
    <div className="">
      <Slider />
      <Outlet />
    </div>
  );
}
