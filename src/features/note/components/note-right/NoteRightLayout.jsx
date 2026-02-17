import { useSearchParams } from "react-router-dom";
import { LuNotebookText } from "react-icons/lu";

import Container from "/src/ui/Container";
import CreateNoteLayout from "./CreateNoteLayout";
import Conditional from "/src/components/Conditional";
import InformationPrompt from "/src/components/InformationPrompt";

import { useNote } from "../../context/NoteContext";

export default function NoteRightLayout() {
  const { isDisplayNote, setIsDisplayNote } = useNote();

  const [searchParams] = useSearchParams();

  const noteId = searchParams.get("noteId");
  const isEditorOpen = isDisplayNote || noteId;

  return (
    <Container classname={"h-full"}>
      <Conditional condition={!isEditorOpen}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          promptText="Select a note to view"
          actionText='Choose a note from the sidebar or tap "Create Note" to make one.'
          onclick={() => setIsDisplayNote((show) => !show)}
          buttonText="Create Note"
        />
      </Conditional>
      <Conditional condition={isEditorOpen}>
        <CreateNoteLayout noteId={noteId} />
      </Conditional>
    </Container>
  );
}
