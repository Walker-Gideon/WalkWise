import FlashcardHeader from "./components/FlashcardHeader";
import FlashcardPrompt from "./components/FlashcardPrompt";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Flashcard() {
  return (
    <Container>
      <FlashcardHeader />
      <Main classname={"h-[500px]"}>
        <FlashcardPrompt />
      </Main>
    </Container>
  );
}
