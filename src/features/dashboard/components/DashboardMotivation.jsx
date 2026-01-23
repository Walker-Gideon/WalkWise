import { LuLightbulb } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

import { useQuotes } from "/src/hook/useQuotes";

export default function DashboardMotivation() {
  const {quote, author} = useQuotes();

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4 flex items-center gap-2"}>
        <LuLightbulb className="icons mb-1" />
        <SpanText>Daily Inspiration</SpanText>
      </HeaderText>
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
