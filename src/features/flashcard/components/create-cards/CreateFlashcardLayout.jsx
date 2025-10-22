import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";

export default function CreateFlashcardLayout() {
  return (
    <div>
      <Header type="padding" classname={""}>
        <HeaderText variant="header">Create a new flashcard set</HeaderText>
      </Header>
    </div>
  );
}
