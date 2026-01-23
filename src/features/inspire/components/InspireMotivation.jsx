import { LuLightbulb } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

import { useQuotes } from "/src/hook/useQuotes";

export default function InspireMotivation() {
  const {quote, author} = useQuotes();

  return (
    <Card>
      <SpanText classname={"mb-4 flex items-center space-x-3"}>
        <LuLightbulb className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        <HeaderText type="secondary">Daily Inspiration</HeaderText>
      </SpanText>
      <Group classname={"space-y-2"}>
        <blockquote className="secondary-text-color text-sm italic">
          "{quote}"
        </blockquote>
        <Paragraph classname={"text-right text-sm primary-text-color"}>
          — {author}
        </Paragraph>
      </Group>
    </Card>
  );
}
