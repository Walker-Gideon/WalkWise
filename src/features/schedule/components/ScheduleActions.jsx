import { LuPlus, LuPlay, LuChartColumnIncreasing } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

const buttons = [
  {
    text: "Start Next Session",
    icon: LuPlay,
    // to:
  },
  {
    text: "Add Session",
    icon: LuPlus,
    // to:
  },
];

export default function ScheduleActions() {
  const styling = "h-5 w-5 text-white";

  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4">
        Quick Actions
      </HeaderText>
      <Group>
        {buttons.map((data, index) => (
          <Button
            key={index}
            type="colors"
            classname={`flex gap-3 w-full py-3 ${index === 1 ? "my-2" : ""}`}
          >
            {<data.icon className={styling} />}
            {data.text}
          </Button>
        ))}

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
