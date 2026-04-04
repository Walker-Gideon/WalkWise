import { useSearchParams } from "react-router-dom";

import Container from "/src/ui/Container";
import LeftNoteHeader from "./LeftNoteHeader";
import LeftNoteContent from "./LeftNoteContent";

import useFetchNotes from "../../hook/useFetchNotes";
import { useNote } from "../../context/NoteContext";

export default function NoteLeftLayout() {
  const { notes } = useFetchNotes();
  const { isDisplayNote } = useNote();
  const [searchParams] = useSearchParams();

  const noteId = searchParams.get("noteId");
  const isEditorOpen = isDisplayNote || noteId;

  const hasNotes = notes?.length > 0;
  const hiddenOnMobile = (isEditorOpen || !hasNotes) ? "hidden maxmid:flex" : "flex maxmid:flex";

  return (
    <Container
      adjust={true}
      classname={`${hiddenOnMobile} min-w-0 min-h-0 h-full flex-col border-r-0 borderStyling medium:border-r`}
    >
      <LeftNoteHeader />
      <LeftNoteContent />
    </Container>
  );
}
