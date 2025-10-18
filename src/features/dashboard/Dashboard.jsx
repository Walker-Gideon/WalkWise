import DashboardHeader from "./components/DashboardHeader";
import Container from "/src/ui/Container";

export default function Dashboard() {
  return (
    <Container classname={""}>
      <DashboardHeader />
      <h1>Dashboard</h1>
    </Container>
  );
}
