import { LuAward, LuLightbulb } from "react-icons/lu";

import InspireStreakCounter from "./components/InspireStreakCounter";
import InspireAchievement from "./components/InspireAchievement";
import InspireProgress from "./components/InspireProgress";
import InspireActions from "./components/InspireActions";
import InspireHeader from "./components/InspireHeader";
import Motivation from "/src/components/Motivation";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

import { useQuotes } from "/src/hook/useQuotes";

export default function Inspire() {
  const {quote, author} = useQuotes();

  return (
    <Container>
      <InspireHeader />
      <Main
        classname={
          "grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-3 medium:h-[510px] h-screen overflow-y-scroll p-6"
        }
      >
        <Group classname={"space-y-6 lg:col-span-2"}>
          <Motivation
            icon={<LuLightbulb className="icons mb-1" />}
            headerText="Daily Inspiration"
            quote={quote}
            author={author}
          />
          <InspireAchievement />
          <InspireProgress />
        </Group>
        <Group classname={"space-y-6"}>
          <InspireStreakCounter />
          {/* Conditional this base on if the user have nothing in achievement or new to the project */}
          <Motivation
            icon={<LuAward className="icons mb-1" />}
            headerText="Daily Encouragement"
            quote={"Praise yourself for your achievements."} //will be change later
            author={"WalkWise AI"}
          />
          <InspireActions />
        </Group>
      </Main>
    </Container>
  );
}
