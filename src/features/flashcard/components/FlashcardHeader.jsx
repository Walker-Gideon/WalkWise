import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";

export default function FlashcardHeader({ isDisplayCreateCard }) {
  return (
    <Header type="padding" classname={`${isDisplayCreateCard ? "hidden" : ""}`}>
      <HeaderText variant="header">My Flashcards</HeaderText>
    </Header>
  );
}
