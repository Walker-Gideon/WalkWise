import { isSameMonth, isToday } from "date-fns";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

export default function CalendarGrid({ calendarDays, currentMonth }) {
  return (
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
  );
}
