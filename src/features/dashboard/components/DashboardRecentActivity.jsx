import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Flex from "/src/ui/Flex";

export default function DashboardRecentActivity() {
  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4"}>
        Recent Activity
      </HeaderText>
      {/* Conditional here to display */}

      {/* 1. The dashboard recent activity */}

      {/* #. if no data yet display this 👇 */}
      <Flex variant="center" classname={"h-full w-full p-4 text-slate-400"}>
        <Paragraph variant="small">No recent activity yet.</Paragraph>
      </Flex>
    </Card>
  );
}
