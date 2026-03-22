import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { LuBookOpen, LuCalendarCheck, LuCalendarPlus, LuRectangleVertical, LuActivity } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import HeaderText from "/src/ui/HeaderText";
import Conditional from "/src/components/Conditional";

import { useFetchCards } from "/src/hook/useCards";
import useFetchNotes from "/src/features/note/hook/useFetchNotes";
import { useSessions } from "/src/features/schedule/hooks/useSessions";

export default function DashboardRecentActivity() {
  const { notes, isPending: isNotesPending } = useFetchNotes();
  const { sessions, isLoading: isSessionsPending } = useSessions();
  const { flashcards, isPending: isCardsPending } = useFetchCards();

  const isPending = isCardsPending || isSessionsPending || isNotesPending;

  const activities = useMemo(() => {
    let allActivities = [];

    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const parseDate = (d) => (d?.toDate ? d.toDate() : new Date(d));

    // Process Notes
    if (notes?.length > 0) {
      notes.forEach((note) => {
        if (note.createdAt) {
          const createdDate = parseDate(note.createdAt);
          if (createdDate >= twentyFourHoursAgo) {
            allActivities.push({
              id: `note-create-${note.id}`,
              title: `Created Note: ${note.title}`,
              time: createdDate,
              icon: <LuBookOpen className="icon" />
            });
          }
        }
        
        if (note.updatedAt) {
          const updatedDate = parseDate(note.updatedAt);
          if (updatedDate >= twentyFourHoursAgo && (!note.createdAt || updatedDate.getTime() !== parseDate(note.createdAt).getTime())) {
            allActivities.push({
              id: `note-update-${note.id}`,
              title: `Edited Note: ${note.title}`,
              time: updatedDate,
              icon: <LuBookOpen className="icon" />
            });
          }
        }
      });
    }

    // Process Flashcards
    if (flashcards?.length > 0) {
      flashcards.forEach((card) => {
        if (card.createdAt) {
          const createdDate = parseDate(card.createdAt);
          if (createdDate >= twentyFourHoursAgo) {
            allActivities.push({
              id: `card-create-${card.id}`,
              title: `Created Flashcard: ${card.title}`,
              time: createdDate,
              icon: <LuRectangleVertical className="icon" />
            });
          }
        }
        
        if (card.updatedAt) {
          const updatedDate = parseDate(card.updatedAt);
          if (updatedDate >= twentyFourHoursAgo && (!card.createdAt || updatedDate.getTime() !== parseDate(card.createdAt).getTime())) {
            allActivities.push({
              id: `card-update-${card.id}`,
              title: `Edited Flashcard: ${card.title}`,
              time: updatedDate,
              icon: <LuRectangleVertical className="icon" />
            });
          }
        }
      });
    }

    // Process Session
    if (sessions?.length > 0) {
      sessions.forEach((session) => {
        if (session.scheduledAt) {
          const scheduledDate = parseDate(session.scheduledAt);
          if (scheduledDate >= twentyFourHoursAgo) {
            allActivities.push({
              id: `session-${session.id}`,
              title: `Session: ${session.title}`,
              time: scheduledDate,
              icon: <LuCalendarPlus className="icon" />
            });
          }
        }

        if (session.status === "completed" && session.completedAt) {
          const completedDate = parseDate(session.completedAt);
          if (completedDate >= twentyFourHoursAgo) {
            allActivities.push({
              id: `session-completed-${session.id}`,
              title: `Session Completed: ${session.title}`,
              time: completedDate,
              icon: <LuCalendarCheck className="icon" />
            });
          }
        }

        if (session.status === "in-progress" && session.scheduledAt) {
          const inProgressDate = session.updatedAt ? parseDate(session.updatedAt) : new Date();
          if (inProgressDate >= twentyFourHoursAgo) {
            allActivities.push({
              id: `session-in-progress-${session.id}`,
              title: `Session In Progress: ${session.title}`,
              time: inProgressDate,
              icon: <LuCalendarCheck className="icon" />
            });
          }
        }
      });
    }

    allActivities.forEach(a => {
      if (a.id.includes("completed") || a.id.includes("in-progress")) a.type = "status";
      else if (a.id.includes("update")) a.type = "update";
      else a.type = "create";
    });

    const now = Date.now();
    const sortRecent = (a, b) => {
      const aPast = a.time.getTime() <= now;
      const bPast = b.time.getTime() <= now;
      if (aPast && bPast) return b.time - a.time; // Newest past events top
      if (!aPast && !bPast) return a.time - b.time; // Soonest future events top
      return aPast ? -1 : 1; // Past events always beat future events
    };

    const creates = allActivities.filter(a => a.type === "create").sort(sortRecent);
    const updates = allActivities.filter(a => a.type === "update").sort(sortRecent);
    const statuses = allActivities.filter(a => a.type === "status").sort(sortRecent);

    // Prioritize up to 2 of each
    const topCreates = creates.slice(0, 2);
    const topUpdates = updates.slice(0, 2);
    const topStatuses = statuses.slice(0, 2);

    let mergedActivities = [...topCreates, ...topUpdates, ...topStatuses];

    // Backfill with newest remaining items if we have less than 6 total
    if (mergedActivities.length < 6) {
      const remaining = [
        ...creates.slice(2),
        ...updates.slice(2),
        ...statuses.slice(2)
      ].sort(sortRecent);

      mergedActivities = [...mergedActivities, ...remaining.slice(0, 6 - mergedActivities.length)];
    }

    return mergedActivities.sort(sortRecent).slice(0, 6);
  }, [flashcards, notes, sessions]);

  const activitiesLength = activities.length > 0;

  return (
    <Card>
      <HeaderText type="semiHeader">
        <LuActivity className="icons" />
        <SpanText>Recent Activity</SpanText>
      </HeaderText>
      <Conditional condition={isPending}>
        <Spinner secondary={true} />
      </Conditional>
      <Conditional condition={!isPending}>
        <Conditional condition={activitiesLength}>
          <Group classname={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
            {activities.map((activity) => (
              <ActivityCard key={activity.id} icon={activity.icon} title={activity.title} time={activity.time}/>
              ))}
            </Group>
          </Conditional>
          <Conditional condition={!activitiesLength}>
            <Flex variant="center" classname={"h-full w-full p-4 text-slate-400"}>
              <Paragraph variant="small">No recent activity yet.</Paragraph>
            </Flex>
          </Conditional>
        </Conditional>
    </Card>
  );
}

function ActivityCard({icon, title, time}) {
  return (
    <>
      <Flex classname={"items-center gap-4 border-b pb-3 borderStyling"}>
        <Badge type="primary">
          {icon}
        </Badge>
        <Group classname={"flex-1 min-w-0"}>
          <Paragraph variant="small" classname={"truncate font-medium primary-text-color"}>
            {title}
          </Paragraph>
          <Paragraph classname={"truncate text-xs secondary-text-color"}>
            {formatDistanceToNow(time, { addSuffix: true })}
          </Paragraph>
        </Group>
      </Flex>
    </>
  )
}