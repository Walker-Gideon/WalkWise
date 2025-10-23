import Paragraph from "/src/ui/Paragraph";
import Group from "/src/ui/Group";

export default function CreatedNotification({ pairs, MAX_PAIRS }) {
  return (
    <Group classname="pt-2 text-right">
      {pairs.length >= MAX_PAIRS && (
        <Paragraph type="information">
          Maximum of {MAX_PAIRS} terms & definitions per card reached.
        </Paragraph>
      )}
    </Group>
  );
}
