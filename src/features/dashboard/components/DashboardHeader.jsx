import { LuFlame } from "react-icons/lu";

import Heading from "/src/components/Heading";
import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useUserData } from "/src/user/hook/useUserData";

export default function DashboardHeader() {
  const { userData } = useUserData();
  const username = userData ? `${userData?.username}` : "username";
  const streak = userData ? userData?.streakCount : 0;

  return (
    <Heading
      headerText={`Welcome, ${username}`}
      paragraphText="Glad to have you on board."
      theme={true}
    >
      <Flex classname={"items-center space-x-3"}>
        <Group
          classname={
            "medium:flex hidden items-center justify-center gap-2 rounded-full px-3 py-2 whitespace-nowrap transition bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"
          }
        >
          <LuFlame className="mb-1 h-4 w-4 text-slate-600 dark:text-slate-300" />
          <SpanText classname={"text-sm font-medium secondary-text-color"}>
            {streak} day streak
          </SpanText>
        </Group>
      </Flex>
    </Heading>
  );
}
