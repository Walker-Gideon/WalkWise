import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useFlashcard } from "../../../context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

export default function CardHeader() {
  const { setIsDisplay } = useFlashcard();

  const handleToggleDisplay = useToggleDisplay(setIsDisplay);

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Reinforce your memory, one card at a time."
      theme={true}
    >
      <Group classname={"space-x-2"}>
        <Button type="colors" onclick={handleToggleDisplay}>
          Create Flashcard
        </Button>
      </Group>
    </Heading>
  );
}
