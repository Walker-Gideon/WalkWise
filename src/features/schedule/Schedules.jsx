import ScheduleActions from "./components/ScheduleActions";
import ScheduleContentLayout from "./components/ScheduleContentLayout";
import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleRemainder from "./components/ScheduleRemainder";
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
        <Group classname={"grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-3"}>
          <ScheduleContentLayout />
          <Group classname={"space-y-6"}>
            <ScheduleActions />
            <ScheduleRemainder />
          </Group>
        </Group>
      </Main>
    </Container>
  );
}
