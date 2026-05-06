import { LuLogOut } from "react-icons/lu";

import Box from "/src/ui/Box";
import Aside from "/src/ui/Aside";
import Button from "/src/layout/Button";
import MainNav from "./components/MainNav";
import UserProfile from "/src/user/UserProfile";
import ThemeButton from "./components/ThemeButton";
import NavigationHeader from "./components/NavigationHeader";

import useNavigateToAction from "/src/hook/useNavigateToAction";
import { useAuthentication } from "/src/authentication/context/AuthContext";
import { useNav } from "/src/contexts/NavigationContext";

export default function Slider({ menu }) {
  const { isExpanded } = useNav();

  return (
    <Aside
      classname={`borderStyling border-r h-screen flex flex-col justify-between transitiona-all duration-500 ${!menu && isExpanded ? "w-20" : "w-65"} ${menu ? "md:hidden z-50 defaultColor" : "md:flex hidden"}`}
    >
        <Box adjustWidth={true}>
          <NavigationHeader showLabel={menu} />
          <MainNav showLabel={menu} />
        </Box>
        <Box
          adjustWidth={true}
          classname={"flex flex-col gap-4 borderStyling border-t p-3.5"}
        >
          <ThemeButton showLabel={menu} />
          <LogOutButton />
          <UserProfile />
        </Box>
    </Aside>
  );
}

function LogOutButton() {
  const { isExpanded } = useNav();
  const { logout } = useAuthentication();
  const navigateTo = useNavigateToAction();

  const handleLogout = async () => {
    await logout();
    navigateTo("/sign-in");
  };

  return (
    <Button
      variant="text"
      ariaLabel="Sign out"
      onClick={handleLogout}
      className={
        `flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-300 py-2 px-2 rounded-sm transition ${isExpanded ? "medium:justify-center medium:text-center" : ""}`
      }
    >
      <LuLogOut className="text-base" />
      <span className={`${isExpanded ? "medium:hidden" : "medium:block"}`}>Sign out</span>
    </Button>
  );
}
