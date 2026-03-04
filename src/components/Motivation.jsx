import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";


export default function Motivation({icon, headerText, quote, author}) {
  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4 flex items-center gap-2"}>
        {icon}
        <SpanText>{headerText}</SpanText>
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
