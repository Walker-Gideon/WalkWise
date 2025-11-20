import Paragraph from "/src/ui/Paragraph";
import Group from "/src/ui/Group";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CreatedNotification() {
  const { pairs, MAX_PAIRS } = useFlashcard();

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
