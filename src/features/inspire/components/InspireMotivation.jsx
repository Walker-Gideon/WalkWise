import { LuLightbulb } from "react-icons/lu";

import Conditional from "/src/components/Conditional";
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
      <Group>
        <Conditional condition={true}>
          <blockquote className="mb-4 text-lg text-slate-500 italic dark:text-slate-400">
            {quote}
          </blockquote>
          <Paragraph classname={"text-right text-sm primary-text-color"}>
            — {author}
          </Paragraph>
        </Conditional>
      </Group>
    </Card>
  );
}
