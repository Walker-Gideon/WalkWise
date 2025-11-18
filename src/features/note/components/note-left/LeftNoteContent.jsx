import { useState } from "react";
import { LuNotebookText } from "react-icons/lu";

import InformationPrompt from "/src/components/InformationPrompt";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import NoteDisplay from "./NoteDisplay";

export default function LeftNoteContent() {
  const [isDisplayCreatedNote, setIsDisplayCreatedNote] = useState(false);

  return (
    <Container adjust={true} classname={`h-110`}>
      <Conditional condition={!isDisplayCreatedNote}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
          actionText="No notes found"
          btn={true}
        />
      </Conditional>
      <Conditional condition={isDisplayCreatedNote}>
        <NoteDisplay />
      </Conditional>
    </Container>
  );
}
