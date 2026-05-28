import { LuLogOut } from "react-icons/lu";

import Box from "/src/ui/Box";
import Aside from "/src/ui/Aside";
import Button from "/src/layout/Button";
import MainNav from "./components/MainNav";
import UserProfile from "/src/user/UserProfile";
import ThemeButton from "./components/ThemeButton";
import NavigationHeader from "./components/NavigationHeader";

import { useNav } from "/src/contexts/NavigationContext";
import useNavigateToAction from "/src/hook/useNavigateToAction";
import { useAuthentication } from "/src/authentication/context/AuthContext";

export default function Slider({ menu }) {
  const { isExpanded } = useNav();

  return (
    <Aside
      classname={`borderStyling border-r h-full flex flex-col justify-between overflow-hidden transition-all duration-300 ${!menu && isExpanded ? "w-65" : "w-20"} ${ menu ? "md:hidden z-50 defaultColor" : "md:flex hidden"}`}
    >
        <Box adjustWidth={true}>
          <NavigationHeader showLabel={menu} />
          <MainNav showLabel={menu} />
        </Box>
        <Box
          adjustWidth={true}
          classname={`flex flex-col gap-2 ${menu ? "p-2" : "p-3.5"} borderStyling border-t`}
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
      className={`flex items-center transition-all duration-300 text-sm font-semibold text-slate-900 dark:text-slate-300 py-2 px-2 rounded-sm ${
        isExpanded ? "gap-2 justify-start" : "gap-0 justify-center"
      }`}
    >
      <LuLogOut className="text-base shrink-0" />
      <span
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
          isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
        }`}
      >
        Sign out
      </span>
    </Button>
  );
}
