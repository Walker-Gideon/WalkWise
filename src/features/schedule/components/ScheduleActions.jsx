import { LuPlus, LuPlay, LuChartColumnIncreasing } from "react-icons/lu";

import Container from "/src/ui/Container";

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
  {
    text: "View Detailed Analytics",
    icon: LuChartColumnIncreasing,
    // to: "/dashboard",
  },
];

export default function ScheduleActions() {
  return (
    <Container adjust={true} classname={""}>
      ScheduleActions
    </Container>
  );
}
