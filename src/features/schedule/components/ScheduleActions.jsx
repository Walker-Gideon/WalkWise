import { useNavigate } from "react-router-dom";
import { LuPlus, LuPlay, LuChartColumnIncreasing } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useUpdateSession } from "../hooks/useUpdateSession";
import { useSchedule } from "../context/ScheduleContext";
import { getScheduleStatus } from "/src/helper/helpers";
import { useSessions } from "../hooks/useSessions";

export default function ScheduleActions() {
  const { setIsDisplaySessionForm } = useSchedule();
  const { updateSession } = useUpdateSession();
  const { sessions } = useSessions();
  const navigate = useNavigate();

  const styling = "h-5 w-5 text-white";

  // Calculate Next Session
  const pendingSessions = sessions?.filter(session => {
      const status = getScheduleStatus(session);
      return status !== 'Completed';
  }) || [];

  const nextSession = pendingSessions.sort((a, b) => {
      const dateA = a.scheduledAt?.toDate ? a.scheduledAt.toDate() : new Date(a.scheduledAt || 0);
      const dateB = b.scheduledAt?.toDate ? b.scheduledAt.toDate() : new Date(b.scheduledAt || 0);
      return dateA - dateB;
  })[0];

  function handleStartNext() {
      if (nextSession) {
          updateSession({ id: nextSession.id, data: { status: 'in-progress' }, silent: true });
          navigate(`/flashcards?study=${nextSession.tag}&session=${nextSession.id}`);
      }
  }

  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4">
        Quick Actions
      </HeaderText>
      <Group>
        <Button
          type="colors"
          disabled={!nextSession}
          onclick={handleStartNext}
          classname={`flex gap-3 w-full py-3`}
        >
          {<LuPlay className={styling} />}
          Start Next Session
        </Button>

        <Button
          type="colors"
          onclick={() => setIsDisplaySessionForm(true)}
          classname={"flex gap-3 w-full py-3 my-2"}
        >
          {<LuPlus className={styling} />}
          Add Session
        </Button>

        <Button
          type="colors"
          to="/dashboard"
          classname={"flex gap-3 w-full py-3"}
        >
          {<LuChartColumnIncreasing className={styling} />}
          View Detailed Analytics
        </Button>
      </Group>
    </Card>
  );
}
