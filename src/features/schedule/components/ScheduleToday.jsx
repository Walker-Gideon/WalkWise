import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";

import { useSchedule } from "../context/ScheduleContext";

// import Conditional from "/src/components/Conditional";
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
        <Flex variant="center" classname="h-full w-full">
          <Paragraph
            variant="small"
            classname={"text-slate-400"}
          >
            No sessions scheduled for today.
          </Paragraph>
        </Flex>
      </Group>
      {/* <Conditional condition={false}>
      </Conditional> */}
    </>
  );
}
