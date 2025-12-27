import { LuPlus, LuPlay, LuChartColumnIncreasing } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useSchedule } from "../context/ScheduleContext";

export default function ScheduleActions() {
  const { setIsDisplaySessionForm } = useSchedule();

  const styling = "h-5 w-5 text-white";

  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4">
        Quick Actions
      </HeaderText>
      <Group>
        <Button
          type="colors"
          onclick={() => {}}
          classname={"flex gap-3 w-full py-3"}
        >
          {<LuPlay className={styling} />}
          Start Next Session
        </Button>

        <Button
          type="colors"
          onclick={() => setIsDisplaySessionForm(true)}
          classname={"flex gap-3 w-full py-3 my-2"}
        >
          {<LuPlus className={styling} />}
          Add Session
        </Button>

        <Button
          type="colors"
          to="/dashboard"
          classname={"flex gap-3 w-full py-3"}
        >
          {<LuChartColumnIncreasing className={styling} />}
          View Detailed Analytics
        </Button>
      </Group>
    </Card>
  );
}
