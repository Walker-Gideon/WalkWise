import { LuFlame } from "react-icons/lu";
import Heading from "/src/components/Heading";
import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function DashboardHeader() {
  return (
    <Heading
      headerText="Welcome,&nbsp; username"
      paragraphText="Glad to have you on board."
      theme={true}
    >
      <Flex classname={"items-center space-x-3"}>
        <Group
          classname={
            "medium:flex hidden items-center justify-center space-x-2 rounded-full px-3 py-2 whitespace-nowrap transition bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"
          }
        >
          <LuFlame className="h-4 w-4 text-slate-600 dark:text-slate-300" />
          <SpanText classname={"text-sm font-medium secondary-text-color"}>
            X day streak
          </SpanText>
        </Group>
      </Flex>
    </Heading>
  );
}
