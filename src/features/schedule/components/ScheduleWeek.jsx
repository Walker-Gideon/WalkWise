import {
  format,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  addDays,
} from "date-fns";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function ScheduleWeek() {
  const now = new Date();
  const start = startOfWeek(now, { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(now, { weekStartsOn: 1 }); // Sunday

  // Step 1: Get sessions within the current week

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
            <Flex variant="between">
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
            </Flex>
          </Card>
        ))}
      </Group>
    </>
  );
}
