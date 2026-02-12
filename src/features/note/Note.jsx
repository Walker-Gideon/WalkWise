import Container from "/src/ui/Container";
import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";

import { NoteProvider } from "./context/NoteContext";

export default function Note() {
  return (
    <NoteProvider>
      <Container
        classname={`medium:grid medium:grid-cols-[17.5rem_auto] overflow-hidden`}
      >
        <NoteLeftLayout />
        <NoteRightLayout />
      </Container>
    </NoteProvider>
  );
}
