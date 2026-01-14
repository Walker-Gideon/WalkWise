import { LuPlus } from "react-icons/lu";
import { format, differenceInHours } from "date-fns";
import { useSearchParams, useNavigate } from "react-router-dom";

import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Filter from "/src/components/Filter";
import Paragraph from "/src/ui/Paragraph";
import SessionCard from "./SessionCard";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSessions } from "../hooks/useSessions";
import { useSchedule } from "../context/ScheduleContext";
import { getScheduleStatus, getStatusColor } from "/src/helper/helpers";
import { useUpdateSession } from "../hooks/useUpdateSession";

export default function ScheduleToday() {
  const { setSelectedId, setIsDeleteModal, setSelectedSessionTitle, setIsDisplaySessionForm } = useSchedule();
  const { sessions, isLoading } = useSessions();
  const { updateSession } = useUpdateSession();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  // Filter sessions: Show pending/in-progress OR completed within last 24h
  const activeSessions = sessions?.filter(session => {
      const status = getScheduleStatus(session);
      if (status !== 'Completed') return true;
      
      if (session.completedAt) {
          const completedDate = session.completedAt.toDate ? session.completedAt.toDate() : new Date(session.completedAt);
          return differenceInHours(new Date(), completedDate) < 24;
      }
      return false; // Completed but no timestamp -> hide
  }) || [];
  
  const display = activeSessions.length === 0;

  const currentFilter = searchParams.get("filter") || "date";
  let sortedSessions = [...activeSessions];

  const isCompleted = (s) => getScheduleStatus(s) === 'Completed';

  sortedSessions.sort((a, b) => {
      if (isCompleted(a) && !isCompleted(b)) return 1;
      if (!isCompleted(a) && isCompleted(b)) return -1;
      return 0;
  });

  if (currentFilter === "status") {
    const statusOrder = { Due: 1, "In Progress": 2, Pending: 3 };
    sortedSessions.sort((a, b) => {
        if (isCompleted(a) !== isCompleted(b)) return 0;
        
        const statusA = getScheduleStatus(a);
        const statusB = getScheduleStatus(b);
        return (statusOrder[statusA] || 99) - (statusOrder[statusB] || 99);
    });
  } else if (currentFilter === "date") {
      sortedSessions.sort((a, b) => {
          if (isCompleted(a) !== isCompleted(b)) return 0;

          const dateA = a.scheduledAt?.toDate ? a.scheduledAt.toDate() : new Date(a.scheduledAt || 0);
          const dateB = b.scheduledAt?.toDate ? b.scheduledAt.toDate() : new Date(b.scheduledAt || 0);
          return dateA - dateB;
      });
  }

  function handleEdit(id) {
    setSelectedId(id)
    setIsDisplaySessionForm(true)
  }

  function handleDeleteModel(id, title) {
    setSelectedId(id)
    setIsDeleteModal(true)
    setSelectedSessionTitle(title)
  }

  function handlePlay(id, flashcardSetId) {
      if (flashcardSetId) {
          updateSession({ id: id, data: { status: 'in-progress' }, silent: true });
          navigate(`/flashcards?study=${flashcardSetId}&session=${id}`);
      }
  }

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">Today's Sessions</HeaderText>
        <Flex classname={"gap-4"}>
            <Filter options={[
                { value: "date", label: "Date" },
                { value: "status", label: "Status" },
              ]} 
            />
            <Button
            type="colors"
            onclick={() => setIsDisplaySessionForm((show) => !show)}
            classname={"flex items-center gap-1"}
            >
            <LuPlus className="h-4 w-4" />
            Add Session
            </Button>
        </Flex>
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
          {sortedSessions?.map((session) => {
             const status = getScheduleStatus(session);
             const statusColor = getStatusColor(status);
             
             // Format scheduled time: YYYY/MM/DD HH:MM
             let formattedTime = "Invalid Date";
             if (session.scheduledAt) {
                 const date = session.scheduledAt.toDate ? session.scheduledAt.toDate() : new Date(session.scheduledAt);
                 formattedTime = format(date, "MM/dd/yyyy HH:mm");
             }

             
             return (
              <SessionCard
                key={session.id}
                title={session.title}
                count={session.numCards}
                estimatedTime={formattedTime}
                status={status}
                statusColor={statusColor}
                onPlay={() => handlePlay(session.id, session.tag)} 
                onEdit={() => handleEdit(session.id)}
                onDelete={() => handleDeleteModel(session.id, session.title)}
              />
            );
          })}
        </Group>
      </Conditional>
    </>
  );
}
