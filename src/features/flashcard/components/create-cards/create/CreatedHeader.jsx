import { useFlashcard } from "/src/features/flashcard/context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function CreatedHeader() {
  const { setIsDisplayFlashcardLayout, setIsCardsInitDisplay } = useFlashcard();

  const toggleDisplayFlashcard = useToggleDisplay(setIsDisplayFlashcardLayout);
  const toggleDisplayCardsInit = useToggleDisplay(setIsCardsInitDisplay);

  return (
    <Heading
      headerText="Create A New flashcard Set"
      paragraphText="Create, review, and master key concepts effortlessly."
    >
      <Group classname={"space-x-2"}>
        <Button
          type="border"
          classname={"px-8 border-stone-300"}
          onclick={toggleDisplayFlashcard}
        >
          Cancel
        </Button>
        <Button
          type="colors"
          classname={"px-8"}
          onclick={toggleDisplayCardsInit}
        >
          Create
        </Button>
      </Group>
    </Heading>
  );
}
