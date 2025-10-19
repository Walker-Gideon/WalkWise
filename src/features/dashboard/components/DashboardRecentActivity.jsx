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
      <Flex variant="center" classname={"h-full w-full p-4"}>
        <Paragraph variant="small">No recent activity yet.</Paragraph>
      </Flex>
    </Card>
  );
}
