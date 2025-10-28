import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";
import Container from "/src/ui/Container";

export default function Note() {
  return (
    <Container>
      <NoteLeftLayout />
      <NoteRightLayout />
    </Container>
  );
}
