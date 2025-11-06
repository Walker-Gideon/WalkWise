import { LuX } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";
import Overlay from "./Overlay";

export default function Model() {
  // Create one for saving the note

  // Default is Schedule
  return (
    <Overlay
      classname={
        "w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800"
      }
    >
      <Flex variant="between">
        <HeaderText type="secondary">Add Study Session</HeaderText>
        <Button variant="secondary" onclick={() => {}} classname={""}>
          <LuX />
        </Button>
      </Flex>

      {/* Form */}
      {/* 
      Select tag input
    Auto generated number of cards
    (date and time) 
    Cancel and add session buttons  */}
    </Overlay>
  );
}
