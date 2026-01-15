import ScheduleMonth from "./ScheduleMonth";
import ScheduleToday from "./ScheduleToday";
import ScheduleWeek from "./ScheduleWeek";
import Card from "/src/components/Card";

import { useSchedule } from "../context/ScheduleContext";

export default function ScheduleContentLayout() {
  const { activeView } = useSchedule();

  return (
    <Card classname={"relative space-y-6 lg:col-span-2"}>
      {activeView === "today" && <ScheduleToday />}
      {activeView === "week" && <ScheduleWeek />}
      {activeView === "month" && <ScheduleMonth />}
    </Card>
  );
}
