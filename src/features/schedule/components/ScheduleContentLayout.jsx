import { useSchedule } from "../context/ScheduleContext";
import ScheduleMonth from "./ScheduleMonth";
import ScheduleToday from "./ScheduleToday";
import ScheduleWeek from "./ScheduleWeek";
import Card from "/src/components/Card";

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
{
  /* <HeaderText type="secondary" classname="mb-4">
        Quick Actions
      </HeaderText> */
}
