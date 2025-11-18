import { LuPlus, LuSearch } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Header from "/src/ui/Header";
import Input from "/src/ui/Input";
import Group from "/src/ui/Group";

export default function LeftNoteHeader() {
  return (
    <Header classname={"px-6 py-4 border-b borderStyling"}>
      <HeaderText type="primary">My Note</HeaderText>
      <Group classname={"relative my-2"}>
        <Input
          type="text"
          name="queryNote"
          // value={}
          // onChange={}
          placeholder="Search note"
          // onKeyDown={}
          classname={"w-full pl-7 dark:text-white"}
          // disabled={}
        />
        <LuSearch className="absolute top-2.5 left-2 text-sm text-slate-600 dark:text-slate-300" />
      </Group>
      <Button
        type="colors"
        classname={"w-full flex items-center justify-center gap-0.5"}
        onclick={() => {}}
      >
        <LuPlus className="h-3.5 w-3.5 text-white" />
        New note
      </Button>
    </Header>
  );
}
