import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function ScheduleToday() {
  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">Today's Sessions</HeaderText>
        <Button
          type="colors"
          onclick={() => {}}
          classname={"flex items-center gap-1"}
        >
          <LuPlus className="h-4 w-4" />
          Add Session
        </Button>
      </Flex>
      <Group>Today</Group>
    </>
  );
}
