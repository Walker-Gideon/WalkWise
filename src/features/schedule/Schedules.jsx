import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleStatus from "./components/ScheduleStatus";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Schedules() {
  return (
    <Container>
      <ScheduleHeader />
      <Main
        // medium:mt-0 mt-7
        classname={"h-screen space-y-6 overflow-scroll p-6"}
      >
        <ScheduleStatus />
      </Main>
    </Container>
  );
}
