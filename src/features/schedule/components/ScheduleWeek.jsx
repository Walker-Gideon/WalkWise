import {
  format,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  addDays,
} from "date-fns";

import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSessions } from "../hooks/useSessions";

export default function ScheduleWeek() {
  const now = new Date();
  const start = startOfWeek(now, { weekStartsOn: 0 }); 
  const end = endOfWeek(now, { weekStartsOn: 0 }); 

  // Step 1: Get sessions within the current week
  const { sessions } = useSessions();

  // Step 2: Static days to display (guaranteed order)
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

  // Step 3: Group sessions by day

  return (
    <>
      <Header>
        <HeaderText type="secondary">This Week</HeaderText>
      </Header>

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

                const titles = sessionsForDay.map(s => s.title);

                return (
                  <>
                    <Conditional condition={totalSessions > 0}>
                      <WeeksSessionDisplay
                        titles={titles}
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
    </>
  );
}

function WeeksSessionDisplay({ titles, totalcards }) {
  return (
    <Group>
      <Group classname="flex flex-wrap gap-1 mb-1">
        {titles.map((title, i) => (
             <Paragraph key={i} classname={"font-medium text-[10px] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full bg-white dark:bg-slate-800"}>
                {title}
            </Paragraph>
        ))}
      </Group>
      <Paragraph classname={"text-xs text-slate-500 dark:text-slate-400 pl-1"}>
        {totalcards}
      </Paragraph>
    </Group>
  )
}