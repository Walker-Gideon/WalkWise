import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function DashboardOverView() {
  return (
    <Card classname={"lg:col-span-2"}>
      <HeaderText type="secondary" classname={"mb-4"}>
        Cards Created Today
      </HeaderText>
      <Group classname="h-190 space-y-3 overflow-y-scroll">
        {/* Conditional here to display */}

        {/* 1. The dashboard overview */}

        {/* #. if no data yet display this 👇 */}
        <Flex variant="center" classname="h-full w-full">
          <Paragraph variant="small" classname={"text-slate-400"}>
            No card created today!.
          </Paragraph>
        </Flex>
      </Group>
    </Card>
  );
}
