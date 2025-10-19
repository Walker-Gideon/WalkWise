import DashboardActions from "./components/DashboardActions";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Dashboard() {
  return (
    <Container adjust={true} classname={""}>
      <DashboardHeader />
      <Main
        // medium:mt-0 mt-7
        classname={"space-y-6 overflow-scroll h-[510px] p-6"}
      >
        <DashboardStatus />
        <DashboardActions />
      </Main>
    </Container>
  );
}
