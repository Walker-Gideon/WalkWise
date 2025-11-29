import Conditional from "/src/components/Conditional";
import CardsInitDisplay from "./CardsInitDisplay";
import CreatedForm from "./create/CreatedForm";
import Container from "/src/ui/Container";

import { useFlashcard } from "../../context/FlashcardContext";

export default function CreateFlashcardLayout() {
  const { isCardsInitDisplay } = useFlashcard();

  return (
    <Container>
      <Conditional condition={!isCardsInitDisplay}>
        <CreatedForm />
      </Conditional>
      <Conditional condition={isCardsInitDisplay}>
        <CardsInitDisplay />
      </Conditional>
    </Container>
  );
}
