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
          /* dark:text-slate-300 */
          icon={<LuNotebookText className="icons" />}
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
