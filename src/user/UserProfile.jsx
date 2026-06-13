import { NavLink } from "react-router-dom";

import Box from "/src/ui/Box";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";

import { useNav } from "/src/contexts/NavigationContext";

export default function UserProfile({ showLabel }) {
  const { isSidebarExpanded, collapseOnMobile } = useNav();

  const effectiveIsSidebarExpanded = showLabel ? true : isSidebarExpanded;

  return (
    <NavLink
      to="/profile"
      end
      onClick={collapseOnMobile}
      className={"relative cursor-pointer block"}
    >
      <Box
        classname={`flex items-center transition-all duration-300 ${
          effectiveIsSidebarExpanded ? "gap-4 justify-start" : "gap-0 justify-center"
        }`}
      >
        <Profile showLabel={showLabel} />
        <Box
          classname={`transition-all duration-300 overflow-hidden ${
            effectiveIsSidebarExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
          }`}
        >
          <UserDetails
            classname1={"primary-text-color"}
            classname2={"secondary-text-color"}
          />
        </Box>
      </Box>
    </NavLink>
  );
}