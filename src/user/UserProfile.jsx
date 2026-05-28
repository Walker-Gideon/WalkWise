import { NavLink } from "react-router-dom";

import Box from "/src/ui/Box";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";

import { useNav } from "/src/contexts/NavigationContext";

export default function UserProfile() {
  const { isExpanded, collapseOnMobile } = useNav();

  return (
    <NavLink
      to="/profile"
      end
      onClick={collapseOnMobile}
      className={"relative cursor-pointer block"}
    >
      <Box
        classname={`flex items-center transition-all duration-300 ${
          isExpanded ? "gap-4 justify-start" : "gap-0 justify-center"
        }`}
      >
        <Profile />
        <Box
          classname={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
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