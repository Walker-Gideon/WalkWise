import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";

// import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SessionCard from "./SessionCard";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSchedule } from "../context/ScheduleContext";
import { useSessions } from "../hooks/useSessions";

export default function ScheduleToday() {
  const { setIsDisplaySessionForm } = useSchedule();
  const { sessions, isLoading } = useSessions();

  console.log(sessions);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">Today's Sessions</HeaderText>
        <Button
          type="colors"
          onclick={() => setIsDisplaySessionForm((show) => !show)}
          classname={"flex items-center gap-1"}
        >
          <LuPlus className="h-4 w-4" />
          Add Session
        </Button>
      </Flex>
      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        {sessions?.length === 0 ? (
          <Flex variant="center" classname="h-full w-full">
            <Paragraph variant="small" classname={"text-slate-400"}>
              No sessions scheduled for today.
            </Paragraph>
          </Flex>
        ) : (
          sessions?.map((session) => (
            <SessionCard
              key={session.id}
              title={session.title}
              count={session.numCards}
              estimatedTime={session.duration}
              onPlay={() => console.log("Play", session.id)}
              onEdit={() => console.log("Edit", session.id)}
              onDelete={() => console.log("Delete", session.id)}
            />
          ))
        )}
      </Group>
    </>
  );
}
