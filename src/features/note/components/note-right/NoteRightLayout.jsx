import { useState } from "react";
import { LuNotebookText } from "react-icons/lu";

import InformationPrompt from "/src/components/InformationPrompt";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import CreateNoteLayout from "./CreateNoteLayout";

export default function NoteRightLayout() {
  const [isDisplayNote, setIsDisplayNote] = useState(false);

  return (
    <Container>
      <Conditional condition={!isDisplayNote}>
        <InformationPrompt
          /* dark:text-slate-300 */
          icon={<LuNotebookText className="icons" />}
          promptText="Select a note to view"
          actionText='Choose a note from the sidebar or tap "Create Note" to make one.'
          onclick={() => setIsDisplayNote((show) => !show)}
          buttonText="Create Note"
        />
      </Conditional>
      <Conditional condition={isDisplayNote}>
        <CreateNoteLayout />
      </Conditional>
    </Container>
  );
}
