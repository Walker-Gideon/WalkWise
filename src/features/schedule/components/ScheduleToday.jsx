import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";

import { useSchedule } from "../context/ScheduleContext";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function ScheduleToday() {
  const { setIsDisplaySessionForm } = useSchedule();

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">Today's Sessions</HeaderText>
        <Button
          type="colors"
          onclick={() => setIsDisplaySessionForm((show) => !show)}
          classname={"flex items-center gap-1"}
        >
          <LuPlus className="h-4 w-4" />
          Add Session
        </Button>
      </Flex>
      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        {/* There will be a conditional here */}
        <Flex variant="center" classname="h-full w-full">
          <Paragraph
            variant="small"
            // className="dark:text-slate-50"
          >
            No sessions scheduled for today.
          </Paragraph>
        </Flex>
      </Group>
    </>
  );
}
