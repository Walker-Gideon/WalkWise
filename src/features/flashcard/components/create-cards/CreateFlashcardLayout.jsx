import { useFlashcard } from "/src/features/flashcard/context/FlashcardContext";

import Conditional from "/src/components/Conditional";
import CardsInitDisplay from "./CardsInitDisplay";
import CreatedForm from "./create/CreatedForm";
import Container from "/src/ui/Container";

export default function CreateFlashcardLayout() {
  const { isCardsInitDisplay } = useFlashcard();

  return (
    <Container adjust={true}>
      <Conditional condition={!isCardsInitDisplay}>
        <CreatedForm />
      </Conditional>
      <Conditional condition={isCardsInitDisplay}>
        <CardsInitDisplay />
      </Conditional>
    </Container>
  );
}
