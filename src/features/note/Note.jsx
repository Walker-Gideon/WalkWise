import Container from "/src/ui/Container";
import NoteHeader from "./components/NoteGeneralHeader";
import NoteLeftLayout from "./components/note-left/NoteLeftLayout";
import NoteRightLayout from "./components/note-right/NoteRightLayout";

import { NoteProvider } from "./context/NoteContext";

export default function Note() {
  return (
    <NoteProvider>
      <Container classname={`flex w-full flex-col overflow-hidden`}>
        <NoteHeader />
        <Container
          adjust={true}
          classname={`flex-1 min-h-0 maxmid:grid maxmid:grid-cols-[17.5rem_auto]`}
        >
          <NoteLeftLayout />
          <NoteRightLayout />
        </Container>
      </Container>
    </NoteProvider>
  );
}
