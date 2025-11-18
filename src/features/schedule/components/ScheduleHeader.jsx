import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";

import { useSchedule } from "../context/ScheduleContext";

const scheduleDate = ["today", "week", "month"];

export default function ScheduleHeader() {
  const { activeView, setActiveView } = useSchedule();

  return (
    <Heading
      headerText="Study Schedule"
      paragraphText="Plan and track your learning sessions"
      theme={true}
      groupStyling={
        "rounded-sm border borderStyling dark:bg-slate-800 bg-white p-1"
      }
    >
      {scheduleDate.map((view, index) => (
        <Button
          key={index}
          onclick={() => setActiveView(view)}
          classname={`${activeView === view ? `bg-slate-500 text-white hover:bg-slate-600` : `text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white`}`}
        >
          {view.charAt(0).toLocaleUpperCase() + view.slice(1)}
        </Button>
      ))}
    </Heading>
  );
}
