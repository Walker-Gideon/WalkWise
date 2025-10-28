import { LuPlus } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";

export default function LeftNoteHeader() {
  return (
    <Heading headerText="My Note">
      <Input
        type="text"
        name="queryNote"
        // value={}
        // onChange={}
        placeholder="Search note"
        // onKeyDown={}
        classname={""}
        // disabled={}
      />
      <Button type="colors" classname={"w-full"} onclick={() => {}}>
        New note
      </Button>
    </Heading>
  );
}
