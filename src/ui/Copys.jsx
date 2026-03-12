import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { LuBookOpen, LuCalendarCheck, LuFileText, LuCalendarPlus } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Spinner from "/src/ui/Spinner";

import { useFetchCards } from "/src/hook/useCards";
import { useSessions } from "/src/features/schedule/hooks/useSessions";
import useFetchNotes from "/src/features/note/hook/useFetchNotes";

export default function DashboardRecentActivity() {
  const { flashcards, isPending: isCardsPending } = useFetchCards();
  const { sessions, isLoading: isSessionsPending } = useSessions();
  const { notes, isPending: isNotesPending } = useFetchNotes();

  const isPending = isCardsPending || isSessionsPending || isNotesPending;

  const activities = useMemo(() => {
    let allActivities = [];

    // 1. Process Notes
    if (notes?.length > 0) {
      notes.forEach((note) => {
        // Updated Note
        if (note.updatedAt && note.updatedAt !== note.createdAt) {
           allActivities.push({
            id: `note-update-${note.id}`,
            title: `Updated Note: ${note.title || "Untitled"}`,
            timestamp: note.updatedAt.toDate ? note.updatedAt.toDate() : new Date(note.updatedAt),
            icon: <LuFileText className="h-5 w-5 text-blue-500" />,
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          });
        }
        // Created Note
        if (note.createdAt) {
          allActivities.push({
            id: `note-create-${note.id}`,
            title: `Created Note: ${note.title || "Untitled"}`,
            timestamp: note.createdAt.toDate ? note.createdAt.toDate() : new Date(note.createdAt),
            icon: <LuFileText className="h-5 w-5 text-blue-500" />,
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          });
        }
      });
    }

    // 2. Process Flashcards
    if (flashcards?.length > 0) {
      flashcards.forEach((card) => {
        // Created Flashcard
        if (card.createdAt) {
          allActivities.push({
            id: `card-create-${card.id}`,
            title: `Created Flashcard: ${card.title || "Untitled"}`,
            timestamp: card.createdAt.toDate ? card.createdAt.toDate() : new Date(card.createdAt),
            icon: <LuBookOpen className="h-5 w-5 text-green-500" />,
            bgColor: "bg-green-100 dark:bg-green-900/30", // green for flashcards
          });
        }
        
        // Updated Flashcard (We assume there could be an updatedAt, or pairs change)
        if (card.updatedAt) {
          allActivities.push({
            id: `card-update-${card.id}`,
            title: `Edited Flashcard: ${card.title || "Untitled"}`,
            timestamp: card.updatedAt.toDate ? card.updatedAt.toDate() : new Date(card.updatedAt),
            icon: <LuBookOpen className="h-5 w-5 text-green-500" />,
            bgColor: "bg-green-100 dark:bg-green-900/30",
          });
        }
      });
    }

    // 3. Process Sessions
    if (sessions?.length > 0) {
      sessions.forEach((session) => {
        // Completed Session
        if (session.status === "completed" && session.completedAt) {
          allActivities.push({
            id: `session-complete-${session.id}`,
            title: `Completed Session: ${session.title || "Untitled"}`,
            timestamp: session.completedAt.toDate ? session.completedAt.toDate() : new Date(session.completedAt),
            icon: <LuCalendarCheck className="h-5 w-5 text-orange-500" />,
            bgColor: "bg-orange-100 dark:bg-orange-900/30", // orange for schedules
          });
        }
        
        // Created Session
        if (session.createdAt) {
          allActivities.push({
            id: `session-create-${session.id}`,
            title: `Created Session: ${session.title || "Untitled"}`,
            timestamp: session.createdAt.toDate ? session.createdAt.toDate() : new Date(session.createdAt),
            icon: <LuCalendarPlus className="h-5 w-5 text-orange-500" />,
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
          });
        }
      });
    }

    // Sort by timestamp descending
    allActivities.sort((a, b) => b.timestamp - a.timestamp);

    // Return only the top 5
    return allActivities.slice(0, 5);
  }, [notes, flashcards, sessions]);

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4"}>
        Recent Activity
      </HeaderText>

      {isPending ? (
        <Flex variant="center" classname="h-40 w-full">
           <Spinner />
        </Flex>
      ) : activities.length > 0 ? (
        <Group classname="flex flex-col gap-4">
          {activities.map((activity) => (
            <Flex key={activity.id} classname="items-center gap-4 border-b border-stone-100 pb-3 last:border-0 dark:border-slate-800">
              <Flex variant="center" classname={`h-10 w-10 shrink-0 rounded-full ${activity.bgColor}`}>
                 {activity.icon}
              </Flex>
              <Group classname="flex-1">
                <Paragraph variant="small" classname="font-medium text-slate-900 dark:text-white">
                  {activity.title}
                </Paragraph>
                <Paragraph variant="xs" classname="text-slate-500 dark:text-slate-400">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </Paragraph>
              </Group>
            </Flex>
          ))}
        </Group>
      ) : (
        <Flex variant="center" classname={"h-full w-full p-4 text-slate-400"}>
          <Paragraph variant="small">No recent activity yet.</Paragraph>
        </Flex>
      )}
    </Card>
  );
}

// #######################################################
 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentActivity.filter((activity) => activity.visible).map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-700/50">
              <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 p-2 dark:from-slate-600 dark:to-slate-700">
                {<activity.icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  {activity.action}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {timeAgo(activity.timestamp)}
                </p>
              </div>
            </div>
          ))}
