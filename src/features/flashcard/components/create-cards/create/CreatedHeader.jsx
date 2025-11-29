import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

import { useFlashcard } from "../../../context/FlashcardContext";
import useToggleDisplay from "/src/hook/useToggleDisplay";

export default function CreatedHeader() {
  const { setIsDisplay, setIsCardsInitDisplay } = useFlashcard();

  const handleCancel = useToggleDisplay(setIsDisplay);
  const handleCreate = useToggleDisplay(setIsCardsInitDisplay);

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
            handleCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          type="colors"
          submit={true}
          classname={"px-8"}
          onclick={handleCreate}
        >
          Create
        </Button>
      </Group>
    </Heading>
  );
}
