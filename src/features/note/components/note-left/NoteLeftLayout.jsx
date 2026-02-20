import Container from "/src/ui/Container";
import LeftNoteHeader from "./LeftNoteHeader";
import LeftNoteContent from "./LeftNoteContent";

export default function NoteLeftLayout() {
  return (
    <Container
      // medium:w-70 medium:mt-0  mt-5 transform  border-stone-300 transition-transform duration-500 ease-in-out dark:border-slate-700
      classname={`maxmid:flex h-screen flex-col border-r-0 borderStyling medium:border-r hidden`}
    >
      <LeftNoteHeader />
      <LeftNoteContent />
    </Container>
  );
}
