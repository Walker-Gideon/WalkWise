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

export default function DashboardRecentActivity() {
  const activities = useMemo(() => {
    
  }, []);

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4"}>
        Recent Activity
      </HeaderText>

      <Conditional condition={true}>
        <Group classname={"grid grid-cols-1 gap-4 md:grid-cols-2 middle:grid-cols-3 lg:grid-cols-4"}>
          {/* {activities.map((activity) => ( */}
            <ActivityCard icon={<LuBookOpen className={"icons"} />} title="Title" time="Time"/>
          {/* ))} */}
        </Group>
      </Conditional>

      <Conditional condition={false}>
        <Flex variant="center" classname={"h-full w-full p-4 text-slate-400"}>
          <Paragraph variant="small">No recent activity yet.</Paragraph>
        </Flex>
      </Conditional>
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
            {time}
          </Paragraph>
        </Group>
      </Flex>
    </>
  )
}