import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Dashboard() {
  return (
    <Container classname={""}>
      <DashboardHeader />
      <Main
        // medium:mt-0 mt-7
        classname={"h-screen space-y-6 overflow-scroll p-6"}
      >
        <DashboardStatus />
      </Main>
    </Container>
  );
}
