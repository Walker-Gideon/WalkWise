import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";

import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SessionCard from "./SessionCard";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSessions } from "../hooks/useSessions";
import { useSchedule } from "../context/ScheduleContext";
import { getScheduleStatus, getStatusColor } from "/src/helper/helpers";

export default function ScheduleToday() {
  const { setIsDisplaySessionForm } = useSchedule();
  const { sessions, isLoading } = useSessions();
  const display = sessions?.length === 0;

  if (isLoading) return <Spinner />;

  // Sort sessions: Due first, then Pending, then Completed
  // Within status, sort by date? User didn't ask, but good UX.
  // For now just display.

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
      <Conditional condition={display}>
        <Flex variant="center" classname="h-full w-full">
          <Paragraph variant="small" classname={"text-slate-400"}>
            No sessions scheduled for today.
          </Paragraph>
        </Flex>
      </Conditional>
      <Conditional condition={!display}>
        <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
          {sessions?.map((session) => {
             const status = getScheduleStatus(session);
             const statusColor = getStatusColor(status);
             
             return (
              <SessionCard
                key={session.id}
                title={session.title}
                count={session.numCards}
                estimatedTime={session.duration}
                status={status}
                statusColor={statusColor}
                onPlay={() => console.log("Play", session.id)}
                onEdit={() => console.log("Edit", session.id)}
                onDelete={() => console.log("Delete", session.id)}
              />
            );
          })}
        </Group>
      </Conditional>
    </>
  );
}
