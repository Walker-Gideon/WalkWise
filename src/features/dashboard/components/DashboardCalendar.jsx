import { isSameMonth, isToday } from "date-fns";
import { LuCalendar } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

import useCalendar from "/src/hook/useCalendar";

export default function DashboardCalendar() {
  const { currentMonth, monthLabel, calendarDays } = useCalendar();

  return (
    <Card>
      <HeaderText
        type="secondary"
        classname={"mb-4 flex text-center items-center gap-2"}
      >
        <LuCalendar className="icons mb-1" />
        <SpanText>{monthLabel}</SpanText>
      </HeaderText>
      <Group
        classname={
          "mb-3 grid grid-cols-7 gap-1 text-xs text-slate-500 dark:text-slate-400"
        }
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Box
            adjustWidth={true}
            key={day}
            classname={"py-1 text-center font-medium"}
          >
            {day}
          </Box>
        ))}

        {calendarDays.map((day) => {
          const dayNumber = day.getDate();
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isTodayDate = isToday(day);

          const backgroundColor = isTodayDate
            ? "bg-emerald-500 text-white"
            : isCurrentMonth
              ? "text-slate-600 dark:text-slate-400"
              : "text-slate-400 dark:text-slate-600";

          return (
            <Box
              adjustWidth={true}
              key={day.toISOString()}
              classname={`flex items-center justify-center text-sm rounded-lg aspect-square ${backgroundColor}`}
            >
              {dayNumber}
            </Box>
          );
        })}
      </Group>
      <Group classname={"flex mt-4 items-center justify-end space-x-2 text-xs"}>
        <Box
          adjustWidth={true}
          classname={"h-3 w-3 rounded-full bg-emerald-500"}
        ></Box>
        <SpanText classname={"primary-text-color"}>Today</SpanText>
      </Group>
    </Card>
  );
}
