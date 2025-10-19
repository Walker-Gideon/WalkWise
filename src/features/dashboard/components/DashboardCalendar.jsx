import { LuCalendar } from "react-icons/lu";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import HeaderText from "/src/ui/HeaderText";
import Group from "/src/ui/Group";
import useCalendar from "/src/hook/useCalendar";

export default function DashboardCalendar() {
  const { currentMonth, monthLabel, calendarDays } = useCalendar();

  return (
    <Card>
      <HeaderText
        type="secondary"
        classname={"mb-4 flex items-center space-x-2"}
      >
        <LuCalendar
          // dark:text-slate-400
          className="h-5 w-5 text-slate-600"
        />
        <SpanText>{monthLabel}</SpanText>
      </HeaderText>
      <Group classname={""}></Group>
    </Card>
  );
}
