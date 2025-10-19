import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { useState } from "react";

export default function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthLabel = format(currentMonth, "MMMM yyyy");

  const genetateCalendarDays = () => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });

    const days = [];
    let day = start;

    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const calendarDays = genetateCalendarDays();

  return {
    currentMonth,
    monthLabel,
    calendarDays,
    onCurrentMonth: setCurrentMonth,
  };
}
