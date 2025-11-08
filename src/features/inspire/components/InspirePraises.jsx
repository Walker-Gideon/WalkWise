import { LuAward } from "react-icons/lu";

import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

export default function InspirePraises() {
  return (
    <Card>
      <SpanText classname={"mb-4 flex items-center space-x-3"}>
        <LuAward className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        <HeaderText variant="secondary">Your Encouragement</HeaderText>
      </SpanText>
      <Group>
        <Paragraph
          className={"mb-4 text-lg text-slate-500 italic dark:text-slate-400"}
        ></Paragraph>
        <Paragraph classname={"italic dark:text-slate-400"}>
          Loading praise...
        </Paragraph>
        <Paragraph
          classname={"text-right text-sm text-slate-900 dark:text-white"}
        >
          - WalkWise AI
        </Paragraph>
      </Group>
    </Card>
  );
}
