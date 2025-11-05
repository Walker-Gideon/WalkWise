import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function DashboardOverView() {
  return (
    <Card classname={"lg:col-span-2"}>
      <HeaderText type="secondary">Cards Created Today</HeaderText>
      <Group classname="h-190 space-y-3 overflow-y-scroll">
        <Flex variant="center" classname="h-full w-full">
          <Paragraph
            variant="small"
            // className="dark:text-slate-50"
          >
            No card created today!.
          </Paragraph>
        </Flex>
      </Group>
    </Card>
  );
}
