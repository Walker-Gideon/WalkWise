import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { LuBookOpen, LuCalendarCheck, LuFileText, LuCalendarPlus, LuRectangleVertical } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";
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

    // 1. Process Notes
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

    // 2. Process Flashcards
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
  
    allActivities.sort((a, b) => b.time - a.time);
    return allActivities.slice(0, 6);  
  }, [flashcards]);

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