import { LuHeart, LuLightbulb } from "react-icons/lu";

import Main from "/src/ui/Main";
import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import Motivation from "/src/components/Motivation";
import InspireHeader from "./components/InspireHeader";
import InspireActions from "./components/InspireActions";
import InspireProgress from "./components/InspireProgress";
import InspireAchievement from "./components/InspireAchievement";
import InspireStreakCounter from "./components/InspireStreakCounter";

import { useQuotes } from "/src/hook/useQuotes";

export default function Inspire() {
  const {quote, author} = useQuotes();

  return (
    <Container classname={"flex h-full flex-col"}>
      <InspireHeader />
      <Main
        classname={
          "grid min-h-0 flex-1 grid-cols-1 gap-x-6 gap-y-3 overflow-y-auto p-6 lg:grid-cols-3"
        }
      >
        <Group classname={"space-y-6 lg:col-span-2"}>
          <Motivation
            icon={<LuLightbulb className="icons" />}
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
            icon={<LuHeart className="icons" />}
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
