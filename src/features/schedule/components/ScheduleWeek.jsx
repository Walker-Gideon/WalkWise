import {
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  addWeeks,
  subWeeks,
} from "date-fns";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

import Conditional from "/src/components/Conditional";
import Legend from "/src/components/Legend";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSessions } from "../hooks/useSessions";
import { getScheduleStatus, getStatusColor } from "/src/helper/helpers";

export default function ScheduleWeek() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const start = startOfWeek(currentDate, { weekStartsOn: 0 }); 
  const end = endOfWeek(currentDate, { weekStartsOn: 0 }); 

  const { sessions } = useSessions();

  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(start, index);
    const isoDate = format(date, "yyyy-MM-dd");
    return {
      label: format(date, "EEE"),
      date: isoDate,
      dayNumber: date.getDate(),
      isToday: isoDate === format(new Date(), "yyyy-MM-dd"),
    };
  });

  function handlePrevWeek() {
    setCurrentDate((cur) => subWeeks(cur, 1));
  }

  function handleNextWeek() {
    setCurrentDate((cur) => addWeeks(cur, 1));
  }

  const styling = {
    icon: "h-4 w-4 text-slate-600 dark:text-slate-400",
    button: "hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-sm",
  };

  const headerTitle = `${format(start, "MMM dd")} - ${format(end, "MMM dd")}`;

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary" classname={"capitalize"}>{headerTitle}</HeaderText>
        
        <Group classname={"space-x-2"}>
          <Button
            variant="secondary"
            onclick={handlePrevWeek}
            classname={styling.button}
          >
            <LuChevronLeft className={styling.icon} />
          </Button>
          <Button
            variant="secondary"
            onclick={handleNextWeek}
            classname={styling.button}
          >
            <LuChevronRight className={styling.icon} />
          </Button>
        </Group>
      </Flex>

      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        {weekDays.map((day) => (
          <Card
            key={day.date}
            classname={`${
              day.isToday
                ? "border-slate-300 bg-slate-200 dark:border-slate-800 dark:bg-slate-900"
                : "border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-700/50"
            }`}
          >
            <Flex classname={"items-center gap-4"}>
              <Flex variant="center" classname={"flex-col space-x-3"}>
                <Paragraph
                  classname={
                    "text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400"
                  }
                >
                  {day.label}
                </Paragraph>
                <Paragraph
                  classname={"text-lg font-bold text-slate-900 dark:text-white"}
                >
                  {day.dayNumber}
                </Paragraph>
              </Flex>

              {(() => {
                const sessionsForDay = sessions?.filter((session) => {
                    if (!session.scheduledAt) return false;
                    const sessionDate = session.scheduledAt.toDate ? session.scheduledAt.toDate() : new Date(session.scheduledAt);
                    return format(sessionDate, "yyyy-MM-dd") === day.date;
                }) || [];

                const totalSessions = sessionsForDay.length;
                const totalCards = sessionsForDay.reduce(
                  (sum, session) => sum + Number(session.numCards || 0),
                  0,
                );

                const sessionsList = sessionsForDay;

                return (
                  <>
                    <Conditional condition={totalSessions > 0}>
                      <WeeksSessionDisplay
                        sessions={sessionsList}
                        totalcards={`${totalCards} cards scheduled`}
                      />
                    </Conditional>
                    <Conditional condition={totalSessions === 0}>
                      <Paragraph variant="small" classname={"text-slate-400"}>
                        No sessions for this day
                      </Paragraph>
                    </Conditional>
                  </>
                );
              })()}
            </Flex>
          </Card>
        ))}
      </Group>

      <Group classname={"flex mt-4 items-center justify-end space-x-6 text-xs"}>
        <Legend status="Pending" />
        <Legend status="In Progress" />
        <Legend status="Due" />
        <Legend status="Completed" />
      </Group>
    </>
  );
}

function WeeksSessionDisplay({ sessions, totalcards }) {
  return (
    <Group>
      <Group classname="flex flex-wrap gap-1 mb-1">
        {sessions.map((session, i) => {
             const status = getScheduleStatus(session);
             const statusColor = getStatusColor(status);
             
             return (
             <Paragraph key={i} classname={`${statusColor} font-medium text-[10px] border border-transparent px-2 py-0.5 rounded-full`}>
                {session.title}
             </Paragraph>
             );
        })}
      </Group>
      <Paragraph classname={"text-xs text-slate-500 dark:text-slate-400 pl-1"}>
        {totalcards}
      </Paragraph>
    </Group>
  )
}

