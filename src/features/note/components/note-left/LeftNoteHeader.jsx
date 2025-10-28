import { LuPlus } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Header from "/src/ui/Header";

export default function LeftNoteHeader() {
  return (
    <Header classname={"px-6 py-4 border-b borderStyling"}>
      <HeaderText type="primary">My Note</HeaderText>
      <Input
        type="text"
        name="queryNote"
        // value={}
        // onChange={}
        placeholder="Search note"
        // onKeyDown={}
        classname={"w-full my-2"}
        // disabled={}
      />
      <Button type="colors" classname={"w-full"} onclick={() => {}}>
        New note
      </Button>
    </Header>
  );
}
