import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";
import Container from "/src/ui/Container";

export default function Note() {
  return (
    <Container
      adjust={true}
      // medium:grid medium:grid-cols-[17.5rem_auto] w-full overflow-hidden
      classname={``}
    >
      <NoteLeftLayout />
      <NoteRightLayout />
    </Container>
  );
}
