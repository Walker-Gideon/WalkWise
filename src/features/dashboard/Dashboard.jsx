import DashboardMotivation from "./components/DashboardMotivation";
import DashboardCalendar from "./components/DashboardCalendar";
import DashboardOverView from "./components/DashboardOverView";
import DashboardActions from "./components/DashboardActions";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

export default function Dashboard() {
  return (
    <Container adjust={true} classname={""}>
      <DashboardHeader />
      <Main
        // medium:mt-0 mt-7
        classname={"space-y-6 overflow-scroll h-[510px] p-6 bg-slate-50"}
      >
        <DashboardStatus />
        <DashboardActions />
        <Group classname={"grid grid-cols-1 gap-6 lg:grid-cols-3"}>
          <DashboardOverView />
          <Group classname={"space-y-6"}>
            <DashboardCalendar />
            <DashboardMotivation />
          </Group>
        </Group>
      </Main>
    </Container>
  );
}
