import Heading from "/src/components/Heading";

import { useFlashcard } from "../context/FlashcardContext";

export default function FlashcardHeader() {
  const { isDisplay } = useFlashcard();

  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Learn smarter with personalized flashcards." 
      theme={true}
      classname={`${isDisplay ? "hidden" : ""}`}
    ></Heading>
  );
}
