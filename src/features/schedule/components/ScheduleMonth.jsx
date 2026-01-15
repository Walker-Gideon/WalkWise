import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { addMonths, subMonths } from "date-fns";

import Conditional from "/src/components/Conditional";
import Legend from "/src/components/Legend";
import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import CalendarGrid from "/src/components/CalendarGrid";
import { useSessions } from "../hooks/useSessions";
import useCalendar from "/src/hook/useCalendar";

export default function ScheduleMonth() {
  const { currentMonth, monthLabel, calendarDays, onCurrentMonth } = useCalendar();
  const { sessions } = useSessions();

  function handlePrevMonth() {
    onCurrentMonth((cur) => subMonths(cur, 1));
  }

  function handleNextMonth() {
    onCurrentMonth((cur) => addMonths(cur, 1));
  }

  const styling = {
    icon: "h-4 w-4 text-slate-600 dark:text-slate-400",
    button: "hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-sm",
  };

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">{monthLabel}</HeaderText>
        <Group classname={"space-x-2"}>
          <Button
            variant="secondary"
            onclick={handlePrevMonth}
            classname={styling.button}
          >
            <LuChevronLeft className={styling.icon} />
          </Button>
          <Button
            variant="secondary"
            onclick={handleNextMonth}
            classname={styling.button}
          >
            <LuChevronRight className={styling.icon} />
          </Button>
        </Group>
      </Flex>
      <CalendarGrid
        calendarDays={calendarDays}
        currentMonth={currentMonth}
        sessions={sessions}
        showSessionDetails={true}
      />
      <Conditional condition={sessions?.length > 0}>
        <Group classname={"flex mt-4 items-center justify-end space-x-6 text-xs"}>
          <Legend status="Pending" />
          <Legend status="In Progress" />
          <Legend status="Due" />
          <Legend status="Completed" />
        </Group>
      </Conditional>
    </>
  );
}
