import { useFlashcard } from "/src/features/flashcard/context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function CreatedHeader() {
  const { setIsDisplayFlashcardLayout } = useFlashcard();

  const toggleDisplay = useToggleDisplay(setIsDisplayFlashcardLayout);

  return (
    <Heading
      headerText="Create A New flashcard Set"
      paragraphText="Create, review, and master key concepts effortlessly."
    >
      <Group classname={"space-x-2"}>
        <Button type="danger" classname={"px-8"} onclick={toggleDisplay}>
          Cancel
        </Button>
        <Button type="colors" classname={"px-8"}>
          Create
        </Button>
      </Group>
    </Heading>
  );
}
