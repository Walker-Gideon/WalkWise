import { LuClock } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

export default function ScheduleRemainder() {
  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4 flex items-center gap-2">
        <LuClock className="h-5 w-5" />
        Next Session
      </HeaderText>
      <Group>
        <Paragraph classname={"mb-4 font-medium secondary-text-color"}>
          {/* {nearestSessions?.at(0)?.tag} starts in{" "}
          {getTimeRemaining(nearestSessions?.at(0)?.scheduledAt)} */}
          Schedule starts in X
        </Paragraph>
        <Paragraph variant="small" classname={"primary-text-color"}>
          {/* {nearestSessions?.at(0)?.count}{" "}
          {nearestSessions?.at(0)?.count === 1 ? "card" : "cards"} •{" "}
          {nearestSessions?.at(0)?.estimatedTime} min */}
          X card(s) & min(s)
        </Paragraph>
      </Group>
    </Card>
  );
}
