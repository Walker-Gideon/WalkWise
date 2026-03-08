import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Heading from "/src/components/Heading";

import useToggleDisplay from "/src/hook/useToggleDisplay";
import { useFlashcard } from "../../../context/FlashcardContext";

export default function CardHeader() {
  const { setIsDisplay } = useFlashcard();

  const handleToggleDisplay = useToggleDisplay(setIsDisplay);

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Reinforce your memory, one card at a time."
      theme={true}
    >
      <Group classname={"space-x-2 hidden md:block"}>
        <Button type="colors" onclick={handleToggleDisplay}>
          Create Flashcard
        </Button>
      </Group>
    </Heading>
  );
}
