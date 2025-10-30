import { useState } from "react";
import { LuNotebookText } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

import InformationPrompt from "/src/components/InformationPrompt";
import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";

export default function LeftNoteContent() {
  const [isDisplayCreatedNote, setIsDisplayCreatedNote] = useState(false);

  return (
    <Container adjust={true} classname={`h-110`}>
      <Conditional condition={isDisplayCreatedNote}>
        <InformationPrompt
          /* dark:text-slate-300 */
          icon={<LuNotebookText className="icons" />}
          actionText="No notes found"
          btn={true}
        />
      </Conditional>
      <Conditional condition={!isDisplayCreatedNote}>
        <div className="scroll-container mb-4 h-screen overflow-y-scroll">
          <div
            className={`my-1 flex w-full cursor-pointer items-center justify-between gap-2 border-b border-stone-300 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700`}
          >
            <div role="button" onClick={() => {}} className="w-full py-2 pl-4">
              <h1 className="medium:text-sm mb-1 w-40 truncate overflow-hidden whitespace-nowrap text-slate-900 dark:text-white">
                title
              </h1>

              <p className="medium:text-xs text-sm text-slate-500 dark:text-slate-400">
                time
              </p>
            </div>

            {/* <Button
              variant="outline"
              onClick={() => handleDelete(id)}
              classname="text-slate-700 pr-4 dark:text-slate-200"
            >
              <RiDeleteBin5Line className="h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </Conditional>
    </Container>
  );
}
