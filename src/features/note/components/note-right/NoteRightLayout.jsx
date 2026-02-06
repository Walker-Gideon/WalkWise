import { useState } from "react";
import { LuNotebookText } from "react-icons/lu";

import InformationPrompt from "/src/components/InformationPrompt";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import CreateNoteLayout from "./CreateNoteLayout";

import { useUserData } from "/src/user/hook/useUserData";

export default function NoteRightLayout() {
  const { userData } = useUserData();

  // const uid = userData?.uid;
  // console.log(notes)
  
  const [isDisplayNote, setIsDisplayNote] = useState(false);

  return (
    <Container classname="h-full">
      <Conditional condition={!isDisplayNote}>
        <InformationPrompt
          icon={<LuNotebookText className="h-5 w-5 text-slate-600 dark:text-slate-900" />}
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
