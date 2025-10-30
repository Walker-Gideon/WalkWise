import { LuNotebookText } from "react-icons/lu";

import Container from "/src/ui/Container";
import InformationPrompt from "/src/components/InformationPrompt";
// import Conditional from "/src/components/Conditional";

export default function LeftNoteContent() {
  return (
    <Container adjust={true} classname={"h-110"}>
      {/* <Conditional condition={!isDisplayFlashcardLayout}> */}
      <InformationPrompt
        /* dark:text-slate-300 */
        icon={<LuNotebookText className="icons" />}
        actionText="No notes found"
        btn={true}
      />
      {/* </Conditional> */}
    </Container>
  );
}
