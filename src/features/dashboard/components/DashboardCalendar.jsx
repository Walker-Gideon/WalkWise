import { isSameMonth, isToday } from "date-fns";
import { LuCalendar } from "react-icons/lu";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import HeaderText from "/src/ui/HeaderText";
import Group from "/src/ui/Group";
import { currentMonth, monthLabel, calendarDays } from "/src/hook/useCalendar";
import Box from "/src/ui/Box";

export default function DashboardCalendar() {
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
      <Group
        classname={
          "mb-3 grid grid-cols-7 gap-1 text-xs text-slate-500 dark:text-slate-400"
        }
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Box
            adjustWidth={true}
            key={day}
            className="py-1 text-center font-medium"
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
    </Card>
  );
}
