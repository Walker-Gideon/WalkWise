import Heading from "/src/components/Heading";

export default function FlashcardHeader({ isDisplayCreateCard }) {
  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Learn smarter with personalized flashcards." //When create a flashacard use this "Reinforce your memory, one card at a time."
      classname={`${isDisplayCreateCard ? "hidden" : ""}`}
    ></Heading>
  );
}
