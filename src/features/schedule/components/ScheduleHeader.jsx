import Heading from "/src/components/Heading";
import ScheduleViewButton from "./ScheduleViewButton";

export default function ScheduleHeader() {
  return (
    <Heading
      headerText="Study Schedule"
      paragraphText="Plan and track your learning sessions"
      theme={true}
      groupStyling={
        "rounded-sm border borderStyling dark:bg-slate-800 bg-white p-1 hidden md:flex"
      }
    >
      <ScheduleViewButton />
    </Heading>
  );
}