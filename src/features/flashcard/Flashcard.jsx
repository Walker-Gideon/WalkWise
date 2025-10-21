import { LuRectangleVertical } from "react-icons/lu";
import InformationPrompt from "../../components/InformationPrompt";
import FlashcardHeader from "./components/FlashcardHeader";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Flashcard() {
  return (
    <Container>
      <FlashcardHeader />

      {/* will adjust the height base on the state that display the component */}
      <Main classname={"h-[400px]"}>
        <InformationPrompt
          /* dark:text-slate-300 */
          icon={<LuRectangleVertical className="icons" />}
          promptText="You haven't created any flashcards yet."
          actionText='Get started by tapping "Create Flashcard"'
          onclick={() => {}}
          buttonText="Create Flashcard"
        />
      </Main>
    </Container>
  );
}
