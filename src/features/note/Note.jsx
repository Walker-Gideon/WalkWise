import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";
import Container from "/src/ui/Container";

export default function Note() {
  return (
    <Container
      // adjust={true}
      classname={`medium:grid medium:grid-cols-[17.5rem_auto] overflow-hidden`}
    >
      <NoteLeftLayout />
      <NoteRightLayout />
    </Container>
  );
}
