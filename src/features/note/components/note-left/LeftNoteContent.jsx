import { useState } from "react";
import { LuNotebookText } from "react-icons/lu";

import InformationPrompt from "/src/components/InformationPrompt";
import Container from "/src/ui/Container";
import Conditional from "/src/components/Conditional";

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
    </Container>
  );
}
