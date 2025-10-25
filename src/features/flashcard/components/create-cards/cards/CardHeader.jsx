import { useFlashcard } from "../../../context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function CardHeader() {
  const { setIsDisplayFlashcardLayout } = useFlashcard();

  const toggleDisplay = useToggleDisplay(setIsDisplayFlashcardLayout);

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Reinforce your memory, one card at a time."
    >
      <Group classname={"space-x-2"}>
        <Button type="colors" onclick={toggleDisplay}>
          Create Flashcard
        </Button>
      </Group>
    </Heading>
  );
}
