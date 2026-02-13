import { LuLightbulb } from "react-icons/lu";

import Main from "/src/ui/Main";
import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import Motivation from "/src/components/Motivation";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import DashboardActions from "./components/DashboardActions";
import DashboardOverView from "./components/DashboardOverView";
import DashboardCalendar from "./components/DashboardCalendar";
import DashboardRecentActivity from "./components/DashboardRecentActivity";

import { useQuotes } from "/src/hook/useQuotes";

export default function Dashboard() {
  const {quote, author} = useQuotes();

  return (
    <Container adjust={true}>
      <DashboardHeader />
      <Main classname={"space-y-6 overflow-y-scroll h-[510px] p-6"}>
        <DashboardStatus />
        <DashboardActions />
        <Group classname={"grid grid-cols-1 gap-6 lg:grid-cols-3"}>
          <DashboardOverView />
          <Group classname={"space-y-6"}>
            <DashboardCalendar />
            <Motivation
              icon={<LuLightbulb className="icons mb-1" />}
              headerText="Daily Inspiration"
              quote={quote}
              author={author}
            />
          </Group>
        </Group>
        <DashboardRecentActivity />
      </Main>
    </Container>
  );
}
