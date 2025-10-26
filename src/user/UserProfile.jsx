import { useNav } from "/src/contexts/NavigationContext";
import { LuUser } from "react-icons/lu";

import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

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
        <Group>
          <Paragraph
            classname={
              "font-bold whitespace-nowrap text-slate-900 truncate w-30"
            }
          >
            username
          </Paragraph>
          <Paragraph
            type=""
            classname={"text-xs font-medium text-slate-500 truncate w-30"}
          >
            example123@gmail.com
          </Paragraph>
        </Group>
      </Box>
    </Container>
  );
}

function Profile() {
  return (
    <Box
      adjustWidth={true}
      // bg-gradient-to-r from-slate-200 to-slate-300 transition-colors duration-300 dark:from-slate-600 dark:to-slate-700
      classname={
        "rounded-full flex items-center justify-center w-9 h-9 border-2 border-slate-500"
      }
    >
      {/* text-white */}
      <LuUser className={`h-5 w-5 text-slate-500`} />
    </Box>
  );
}
