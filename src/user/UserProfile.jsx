import { NavLink } from "react-router-dom";

import Box from "/src/ui/Box";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";

import { useNav } from "/src/contexts/NavigationContext";

export default function UserProfile() {
  const { isExpanded, handleToggle } = useNav();

  return (
    <NavLink
      to="/settings"
      end
      onClick={handleToggle}
      classname={"mt-4 relative cursor-pointer"}
    >
      <Box
        classname={`absolute transform transition-transform duration-300 ${isExpanded ? "translate-0 flex items-center justify-center" : "-translate-x-50"}`}
      >
        <Profile />
      </Box>
      <Box
        classname={`flex items-center gap-2 transform transition-transform duration-300 ${isExpanded ? "translate-y-30" : "translate-0"}`}
      >
        <Profile />
        <UserDetails
          classname1={"primary-text-color"}
          classname2={"secondary-text-color"}
        />
      </Box>
    </NavLink>
  );
}