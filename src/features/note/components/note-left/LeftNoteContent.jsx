import { LuNotebookText } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Spinner from "/src/ui/Spinner";
import NoteDisplay from "./NoteDisplay";
import Container from "/src/ui/Container";
import Conditional from "/src/components/Conditional";
import InformationPrompt from "/src/components/InformationPrompt";

import { useFetchNotes } from "../../hook/useFetchNotes";

export default function LeftNoteContent() {
  const { notes, isPending } = useFetchNotes();

  const notesCount = notes?.length;

  if (isPending) {
    return (
      <Flex variant="center" classname={"h-100"}>
        <Spinner styling={"h-auto"} />
      </Flex>
    );
  }

  return (
    <Container adjust={true} classname={`h-113`}>
      <Conditional condition={!notesCount}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          actionText="No notes found"
          btn={true}
        />
      </Conditional>
      <Conditional condition={notesCount > 0}>
        <NoteDisplay notes={notes} />
      </Conditional>
    </Container>
  );
}
