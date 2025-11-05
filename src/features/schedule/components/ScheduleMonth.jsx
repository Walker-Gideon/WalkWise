import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function ScheduleMonth() {
  const styling = {
    icon: "h-4 w-4 text-slate-600 dark:text-slate-400",
    button: "hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-sm",
  };

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">MM YYYY</HeaderText>
        <Group classname={"space-x-2"}>
          <Button
            variant="secondary"
            onclick={() => {}}
            classname={styling.button}
          >
            <LuChevronLeft className={styling.icon} />
          </Button>
          <Button
            variant="secondary"
            onclick={() => {}}
            classname={styling.button}
          >
            <LuChevronRight className={styling.icon} />
          </Button>
        </Group>
      </Flex>
      <Group>Month</Group>
    </>
  );
}
