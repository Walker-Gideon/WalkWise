import Container from "/src/ui/Container";
import LeftNoteHeader from "./LeftNoteHeader";
import LeftNoteContent from "./LeftNoteContent";

import useFetchNotes from "../../hook/useFetchNotes";

export default function NoteLeftLayout() {
  const { notes } = useFetchNotes();

  const hasNotes = notes?.length > 0;

  return (
    <Container
      classname={`maxmid:flex h-screen flex-col border-r-0 borderStyling medium:border-r ${!hasNotes ? "hidden" : ""}`}
    >
      <LeftNoteHeader />
      <LeftNoteContent />
    </Container>
  );
}
