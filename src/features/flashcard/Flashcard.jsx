import FlashcardHeader from "./components/FlashcardHeader";
import FlashcardPrompt from "./components/FlashcardPrompt";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Flashcard() {
  return (
    <Container>
      <FlashcardHeader />

      {/* will adjust the height base on the state that display the component */}
      <Main classname={"h-[400px]"}>
        <FlashcardPrompt />
      </Main>
    </Container>
  );
}
