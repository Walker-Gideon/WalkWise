import InspireStreakCounter from "./components/InspireStreakCounter";
import InspireAchievement from "./components/InspireAchievement";
import InspireMotivation from "./components/InspireMotivation";
import InspireProgress from "./components/InspireProgress";
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
      <Main
        classname={
          "grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-3 medium:h-[510px] h-screen overflow-y-scroll p-6"
        }
      >
        <Group classname={"space-y-6 lg:col-span-2"}>
          <InspireMotivation />
          <InspireAchievement />
          <InspireProgress />
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
