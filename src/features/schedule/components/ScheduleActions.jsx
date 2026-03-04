import { useNavigate } from "react-router-dom";
import { LuPlus, LuPlay, LuChartColumnIncreasing } from "react-icons/lu";

import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Card from "/src/components/Card";
import HeaderText from "/src/ui/HeaderText";

import { useSchedule } from "../context/ScheduleContext";
import { useUpdateSession } from "../hooks/useUpdateSession";
import { useActiveSessions } from "../hooks/useActiveSessions";

export default function ScheduleActions() {
  const { nextSession } = useActiveSessions();
  const { updateSession } = useUpdateSession();
  const { setIsDisplaySessionForm } = useSchedule();

  const navigate = useNavigate();

  function handleStartNext() {
    if (nextSession) {
      updateSession({ id: nextSession.id, data: { status: 'in-progress' }, silent: true });
      navigate(`/flashcards?study=${nextSession.tag}&session=${nextSession.id}`);
    }
  }

  const styling = "h-5 w-5 text-white";
  
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
