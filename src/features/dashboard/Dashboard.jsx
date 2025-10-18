import Container from "/src/ui/Container";
import DashboardHeader from "./components/DashboardHeader";

export default function Dashboard() {
  return (
    <Container classname={""}>
      <DashboardHeader />
      <h1>Dashboard</h1>
    </Container>
  );
}
