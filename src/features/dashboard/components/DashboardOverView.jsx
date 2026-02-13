import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Conditional from "/src/components/Conditional";

export default function DashboardOverView() {
  return (
    <Card classname={"lg:col-span-2"}>
      <HeaderText type="secondary" classname={"mb-4"}>
        Cards Created Today
      </HeaderText>
      <Group classname="h-190 space-y-3 overflow-y-scroll">
        {/* 1. The dashboard overview */}
        <Conditional condition={true}>
          <OverView />
        </Conditional>
        
        {/* 2. if no flashcard created today */}
        <Conditional condition={false}>
          <Flex variant="center" classname="h-full w-full">
            <Paragraph variant="small" classname={"text-slate-400"}>
              No card created today!.
            </Paragraph>
          </Flex>
        </Conditional>
      </Group>
    </Card>
  );
}

function OverView() {
  return (
    <Card>
      <Flex classname={"items-center space-x-4"}>
        <Group classname={"flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}></Group>
        <Group>
          <Paragraph classname={"font-medium primary-text-color"}>
            Flashcard name
          </Paragraph>
          <Paragraph variant="small" classname={"secondary-text-color"}>
            lenght card(s)
          </Paragraph>
        </Group>
      </Flex>
    </Card>
  );
}
