import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { LuBookOpen, LuCalendarCheck, LuFileText, LuCalendarPlus } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import HeaderText from "/src/ui/HeaderText";
import Conditional from "/src/components/Conditional";

import { useFetchCards } from "/src/hook/useCards";
import useFetchNotes from "/src/features/note/hook/useFetchNotes";
import { useSessions } from "/src/features/schedule/hooks/useSessions";

import useTodayFlashcards from "../hooks/useTodayFlashcards";

export default function DashboardRecentActivity() {
  const { notes, isPending: isNotesPending } = useFetchNotes();
  const { sessions, isLoading: isSessionsPending } = useSessions();
  const { flashcards, isPending: isCardsPending } = useFetchCards();


  // Using this 
  const { todayFlashcards, isPending: isPendingTodayFlashcards } = useTodayFlashcards();

  const isPending = isCardsPending || isSessionsPending || isNotesPending || isPendingTodayFlashcards;

  const activities = useMemo(() => {
    let allActivities = [];

    // 2. Process Flashcards
    if (todayFlashcards?.length > 0) {
      todayFlashcards.forEach((card) => {
        console.log(card)
        
        // Created Flashcard
        if (card.createdAt) {
          allActivities.push({
            id: `card-create-${card.id}`,
            title: `Created Flashcard: ${card.title || "Untitled"}`,
            timestamp: card.createdAt.toDate ? card.createdAt.toDate() : new Date(card.createdAt),
            icon: <LuBookOpen className="icon" />,
          });
        }
        
        /*
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
          */
      });
    }
  
  // Sort by timestamp descending
    allActivities.sort((a, b) => b.timestamp - a.timestamp);

    // Return only the top 5
    return allActivities.slice(0, 6);  
  }, []);

  const activitiesLength = activities.length > 0;

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4"}>
        Recent Activity
      </HeaderText>

      {isPending ? (
        <Flex variant="center" classname={"w-full p-4"}>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" />
        </Flex>
      ) : ( 
        <>
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
        </>
      )}
    </Card>
  );
}

function ActivityCard({icon, title, time}) {
  return (
    <>
      <Flex classname={"items-center gap-4 border-b pb-3 last:border-0 borderStyling"}>
        <Badge type="primary">
          {icon}
        </Badge>
        <Group classname={"flex-1"}>
          <Paragraph variant="small" classname={"font-medium primary-text-color"}>
            {title}
          </Paragraph>
          <Paragraph classname={"text-xs secondary-text-color"}>
            {formatDistanceToNow(time, { addSuffix: true })}
          </Paragraph>
        </Group>
      </Flex>
    </>
  )
}