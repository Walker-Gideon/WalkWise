import Container from "/src/ui/Container";
import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";

import { NoteProvider } from "./context/NoteContext";

export default function Note() {
  /*
  For the first responsive layout I was using here was "medium grid"
  */ 
  return (
    <NoteProvider>
      <Container
        classname={`maxmid:grid maxmid:grid-cols-[17.5rem_auto] overflow-hidden`}
      >
        <NoteLeftLayout />
        <NoteRightLayout />
      </Container>
    </NoteProvider>
  );
}
