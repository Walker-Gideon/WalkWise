import Container from "/src/ui/Container";
import NoteHeader from "./components/NoteGeneralHeader";
import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";

import { NoteProvider } from "./context/NoteContext";

export default function Note() {
  return (
    <NoteProvider>
      <NoteHeader />
      <Container
        classname={`maxmid:grid maxmid:grid-cols-[17.5rem_auto] overflow-hidden`}
      >
        <NoteLeftLayout />
        <NoteRightLayout />
      </Container>
    </NoteProvider>
  );
}
