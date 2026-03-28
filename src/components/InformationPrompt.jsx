import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Badge from "/src/components/Badge";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";

export default function InformationPrompt({
  btn,
  icon,
  onclick,
  classname,
  promptText,
  actionText,
  buttonText,
}) {
  return (
    <Group
      classname={`h-full w-full flex items-center justify-center flex-col ${classname}`}
    >
      <Badge type="icons">
        {icon}
      </Badge>
      <Group classname={"text-center py-2"}>
        <HeaderText type="secondary">{promptText}</HeaderText>
        <Paragraph type="information">{actionText}</Paragraph>
      </Group>
      <Button
        type="colors"
        onclick={onclick}
        classname={`focus:ring-slate-300 ${btn ? "hidden" : ""}`}
      >
        {buttonText}
      </Button>
    </Group>
  );
}
