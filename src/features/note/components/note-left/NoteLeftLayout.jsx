import { useSearchParams } from "react-router-dom";

import Container from "/src/ui/Container";
import LeftNoteHeader from "./LeftNoteHeader";
import LeftNoteContent from "./LeftNoteContent";

import { useNote } from "../../context/NoteContext";

export default function NoteLeftLayout() {
  const { isDisplayNote } = useNote();
  const [searchParams] = useSearchParams();

  const noteId = searchParams.get("noteId");
  const isEditorOpen = isDisplayNote || noteId;
  const hiddenOnMobile = isEditorOpen ? "hidden maxmid:flex" : "flex maxmid:flex";

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
