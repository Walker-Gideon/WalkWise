import LeftNoteContent from "./LeftNoteContent";
import LeftNoteHeader from "./LeftNoteHeader";
import Container from "/src/ui/Container";

export default function NoteLeftLayout() {
  return (
    <Container
      // medium:w-70 medium:mt-0  mt-5 transform  border-stone-300 transition-transform duration-500 ease-in-out dark:border-slate-700
      classname={`medium:border-r borderStyling border-r-0`}
    >
      <LeftNoteHeader />
      <LeftNoteContent />
    </Container>
  );
}
