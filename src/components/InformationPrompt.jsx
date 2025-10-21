import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function InformationPrompt({
  icon,
  promptText,
  actionText,
  onclick,
  buttonText,
}) {
  return (
    <Group
      classname={"h-full w-full flex items-center justify-center flex-col"}
    >
      {/* text-slate-500 dark:text-slate-400 */}
      <Badge type="icons">
        {/* dark:text-slate-300 */}
        {/* <icon className="icons" /> */}
        {icon}
      </Badge>
      <Group classname={"text-center py-2"}>
        <HeaderText variant="secondary">{promptText}</HeaderText>
        <Paragraph type="information">{actionText}</Paragraph>
      </Group>
      <Button
        type="colors"
        onclick={onclick}
        classname={"focus:ring-slate-300"}
      >
        {buttonText}
      </Button>
    </Group>
  );
}
