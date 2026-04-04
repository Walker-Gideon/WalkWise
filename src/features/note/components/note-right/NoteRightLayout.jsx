import { LuNotebookText } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

import Container from "/src/ui/Container";
import CreateNoteLayout from "./CreateNoteLayout";
import Conditional from "/src/components/Conditional";
import InformationPrompt from "/src/components/InformationPrompt";

import { useNote } from "../../context/NoteContext";
import useFetchNotes from "../../hook/useFetchNotes";

export default function NoteRightLayout() {
  const { notes } = useFetchNotes();
  const { isDisplayNote, setIsDisplayNote } = useNote();

  const [searchParams] = useSearchParams();

  const noteId = searchParams.get("noteId");

  const hasNotes = notes?.length > 0;
  const isEditorOpen = isDisplayNote || noteId;

  const hiddenOnMobile = !isEditorOpen ? "hidden maxmid:block" : "";

  return (
    <Container adjust={true} classname={`h-full ${hiddenOnMobile}`}>
      <Conditional condition={!isEditorOpen}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          promptText="Select a note to view"
          actionText='Choose a note from the sidebar or tap "Create Note" to make one.'
          onclick={() => setIsDisplayNote((show) => !show)}
          buttonText="Create Note"
          classname={`h-full w-full`}
        />
      </Conditional>
      <Conditional condition={isEditorOpen}>
        <CreateNoteLayout noteId={noteId} />
      </Conditional>
    </Container>
  );
}
