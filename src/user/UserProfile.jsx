import { LuUser } from "react-icons/lu";

import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

import { useNav } from "/src/contexts/NavigationContext";
import { useUserData } from "./hook/useUserData";

export default function UserProfile() {
  const { isExpanded } = useNav();

  return (
    <Container adjust={true} classname={"mt-4 relative"}>
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
    </Container>
  );
}

function Profile() {
  const { isExpanded } = useNav();

  return (
    <Group classname={`group relative inline-flex`}>
      <Box
        adjustWidth={true}
        classname={
          "rounded-full flex items-center justify-center w-9 h-9 border-2 borderStyling"
        }
      >
        <LuUser className={`h-5 w-5 text-slate-500 dark:text-white`} />
      </Box>
      <Group
        classname={`pointer-events-none absolute top-0.5 left-12 z-50 -translate-y-1/2 transform rounded-sm bg-slate-500 px-2 py-1 text-sm font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 ${isExpanded ? "medium:block" : "hidden"}`}
      >
        <UserDetails
          classname1={"text-slate-50"}
          classname2={"text-slate-50"}
        />
      </Group>
    </Group>
  );
}

function UserDetails({ classname1, classname2 }) {
  const { userData, loading } = useUserData();

  return (
    <Group>
      <Paragraph
        classname={`font-bold whitespace-nowrap truncate w-30 ${classname1}`}
      >
        {loading ? "username" : userData?.username}
      </Paragraph>
      <Paragraph
        type=""
        classname={`text-xs font-medium truncate w-30 ${classname2}`}
      >
        {loading ? "example123@gmail.com" : userData?.email}
      </Paragraph>
    </Group>
  );
}
