import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";

const scheduleDate = ["Today", "Week", "Month"];

export default function ScheduleHeader() {
  return (
    <Heading
      headerText="Study Schedule"
      paragraphText="Plan and track your learning sessions"
      // dark:bg-slate-800
      groupStyling={"rounded-sm border borderStyling bg-white p-1 shadow-sm"}
    >
      {scheduleDate.map((view, index) => (
        <Button
          key={index}
          // variant="secondary"
          onclick={() => {}}
          classname={""}
        >
          {view}
        </Button>
      ))}
    </Heading>
  );
}
