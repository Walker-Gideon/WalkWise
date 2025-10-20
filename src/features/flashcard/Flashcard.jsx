import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Main from "/src/ui/Main";

export default function Flashcard() {
  return (
    <Container>
      <Header>
        <HeaderText variant="header">My Flashcards</HeaderText>
      </Header>
      <Main></Main>
    </Container>
  );
}
