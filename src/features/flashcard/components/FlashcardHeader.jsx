import { useFlashcard } from "../context/FlashcardContext";

import Heading from "/src/components/Heading";

export default function FlashcardHeader() {
  const { isDisplayFlashcardLayout } = useFlashcard();

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Learn smarter with personalized flashcards." //When create a flashacard use this "Reinforce your memory, one card at a time."
      theme={true}
      classname={`${isDisplayFlashcardLayout ? "hidden" : ""}`}
    ></Heading>
  );
}
