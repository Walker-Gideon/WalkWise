import { LuNotebookText } from "react-icons/lu";

import InformationPrompt from "/src/components/InformationPrompt";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import NoteDisplay from "./NoteDisplay";

import { useFetchNotes } from "../../hook/useFetchNotes";

export default function LeftNoteContent() {
  const { notes, isPending } = useFetchNotes();

  const notesCount = notes?.length;

  return (
    <Container adjust={true} classname={`h-110`}>
      <Conditional condition={notesCount === 0}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          actionText="No notes found"
          btn={true}
        />
      </Conditional>
      <Conditional condition={notesCount > 0}>
        <NoteDisplay notes={notes} isLoading={isPending} />
      </Conditional>
    </Container>
  );
}
