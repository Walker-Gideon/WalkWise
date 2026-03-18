import { LuCalendar } from "react-icons/lu";

import Box from "/src/ui/Box";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import HeaderText from "/src/ui/HeaderText";
import CalendarGrid from "/src/components/CalendarGrid";

import useCalendar from "/src/hook/useCalendar";

export default function DashboardCalendar() {
  const { currentMonth, monthLabel, calendarDays } = useCalendar();

  return (
    <Card status={true}>
      <HeaderText
        type="secondary"
        classname={"mb-4 flex text-center items-center gap-2"}
      >
        <LuCalendar className={"icons"} />
        <SpanText>{monthLabel}</SpanText>
      </HeaderText>
      <CalendarGrid calendarDays={calendarDays} currentMonth={currentMonth} />
      <Group classname={"flex mt-4 items-center justify-end space-x-2 text-xs"}>
        <Box
          adjustWidth={true}
          classname={"h-2 w-2 md:h-3 md:w-3 rounded-full bg-emerald-500"}
        ></Box>
        <SpanText classname={"primary-text-color"}>Today</SpanText>
      </Group>
    </Card>
  );
}
