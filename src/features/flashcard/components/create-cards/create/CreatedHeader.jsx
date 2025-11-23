import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useFlashcard } from "../../../context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

export default function CreatedHeader() {
  const { setIsDisplayFlashcardLayout, setIsCardsInitDisplay } = useFlashcard();

  const toggleDisplayFlashcard = useToggleDisplay(setIsDisplayFlashcardLayout);
  const toggleDisplayCardsInit = useToggleDisplay(setIsCardsInitDisplay);

  return (
    <Heading
      headerText="Create A New flashcard Set"
      paragraphText="Create, review, and master key concepts effortlessly."
      theme={true}
      paragraphStyling={"dark:text-slate-300"}
    >
      <Group classname={"space-x-2"}>
        <Button
          type="border"
          classname={"px-8 border-stone-300 dark:text-white"}
          onclick={(e) => {
            e.preventDefault();
            toggleDisplayFlashcard();
          }}
        >
          Cancel
        </Button>
        <Button
          type="colors"
          submit={true}
          classname={"px-8"}
          onclick={toggleDisplayCardsInit}
        >
          Create
        </Button>
      </Group>
    </Heading>
  );
}
