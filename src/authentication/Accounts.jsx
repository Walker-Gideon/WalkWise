import { Outlet } from "react-router-dom";

export default function Accounts() {
  return (
    <div className={"h-dvh w-full overflow-x-hidden"}>
      <Outlet />
    </div>
  );
}
