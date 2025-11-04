import ScheduleContentLayout from "./components/ScheduleContentLayout";
import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleStatus from "./components/ScheduleStatus";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

export default function Schedules() {
  return (
    <Container>
      <ScheduleHeader />
      <Main
        // medium:mt-0 mt-7
        classname={"h-[510px] space-y-6 overflow-scroll p-6"}
      >
        <ScheduleStatus />
        {/* Grid container to hold the schedule and (actions, and remainder) */}
        <Group>
          <ScheduleContentLayout />
          <Group>
            {/* Schedule action */}
            {/* Schedule remainder */}
          </Group>
        </Group>
      </Main>
    </Container>
  );
}
