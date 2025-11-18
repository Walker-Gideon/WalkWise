import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useFlashcard } from "../../../context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

export default function CardHeader() {
  const { setIsCardsInitDisplay } = useFlashcard();

  const toggleDisplay = useToggleDisplay(setIsCardsInitDisplay);

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Reinforce your memory, one card at a time."
      theme={true}
    >
      <Group classname={"space-x-2"}>
        <Button type="colors" onclick={toggleDisplay}>
          Create Flashcard
        </Button>
      </Group>
    </Heading>
  );
}
