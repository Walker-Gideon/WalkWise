import Container from "/src/ui/Container";
import InformationPrompt from "/src/components/InformationPrompt";
// import Conditional from "/src/components/Conditional";

export default function LeftNoteContent() {
  return (
    <Container adjust={true} classname={"bg-red-500 h-full"}>
      {/* <Conditional condition={!isDisplayFlashcardLayout}> */}
      <InformationPrompt
        /* dark:text-slate-300 */
        // icon={<LuRectangleVertical className="icons" />}
        promptText="You haven't created any flashcards yet."
        actionText='Get started by tapping "Create Flashcard"'
        onclick={() => {}}
        buttonText="Create Flashcard"
      />
      {/* </Conditional> */}
    </Container>
  );
}
