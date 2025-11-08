import InspireStreakCounter from "./components/InspireStreakCounter";
import InspireActions from "./components/InspireActions";
import InspirePraises from "./components/InspirePraises";
import InspireHeader from "./components/InspireHeader";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

export default function Inspire() {
  return (
    <Container>
      <InspireHeader />
      <Main classname={"grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-3"}>
        <Group classname={"space-y-6 lg:col-span-2"}>
          {/* Motivation
          Achievement
          Progress */}
        </Group>
        <Group classname={"space-y-6"}>
          <InspireStreakCounter />
          <InspirePraises />
          <InspireActions />
        </Group>
      </Main>
    </Container>
  );
}
