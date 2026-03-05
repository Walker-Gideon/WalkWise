import Button from "/src/ui/Button";

import { useSchedule } from "../context/ScheduleContext";

export default function ScheduleViewButton () {
  const { activeView, setActiveView, scheduleDate } = useSchedule();

  return (
    <>
      {scheduleDate.map((view, index) => (
        <Button
          key={index}
          onclick={() => setActiveView(view)}
          classname={`${activeView === view ? `bg-slate-500 text-white hover:bg-slate-600` : `text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white`}`}
        >
          {view.charAt(0).toLocaleUpperCase() + view.slice(1)}
        </Button>
      ))}
    </>
  );
}