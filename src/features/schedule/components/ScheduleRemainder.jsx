import { LuClock } from "react-icons/lu";
import { formatDistanceToNow } from "date-fns";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

import { useSessions } from "../hooks/useSessions";
import { getScheduleStatus } from "/src/helper/helpers";

export default function ScheduleRemainder() {
  const { sessions } = useSessions();

  // 1. Filter for sessions that represent a "Pending" status (future scheduled time)
  const pendingSessions = sessions?.filter((session) => {
    return getScheduleStatus(session) === "Pending";
  }) || [];

  // 2. Sort by scheduledAt Ascending (Earliest/Nearest first)
  const sortedPendingSessions = pendingSessions.sort((a, b) => {
      const dateA = a.scheduledAt?.toDate ? a.scheduledAt.toDate() : new Date(a.scheduledAt || 0);
      const dateB = b.scheduledAt?.toDate ? b.scheduledAt.toDate() : new Date(b.scheduledAt || 0);
      return dateA - dateB; 
  });

  const nextSession = sortedPendingSessions.at(0);

  if (!nextSession) return null;

  const scheduledDate = nextSession.scheduledAt?.toDate ? nextSession.scheduledAt.toDate() : new Date(nextSession.scheduledAt);
  // Using formatDistanceToNow to act as a countdown
  const timeRemaining = formatDistanceToNow(scheduledDate);

  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4 flex items-center gap-2">
        <LuClock className="h-5 w-5" />
        Next Session
      </HeaderText>
      <Group>
        <Paragraph classname={"mb-4 font-medium secondary-text-color line-clamp-1"}>
          {nextSession.title} starts in {timeRemaining}
        </Paragraph>
        <Paragraph variant="small" classname={"primary-text-color"}>
          {nextSession.numCards} {nextSession.numCards === 1 ? "card" : "cards"} • {nextSession.duration || 0} min
        </Paragraph>
      </Group>
    </Card>
  );
}
