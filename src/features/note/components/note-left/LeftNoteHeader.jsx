import { LuPlus } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Header from "/src/ui/Header";
import Group from "../../../../ui/Group";

export default function LeftNoteHeader() {
  return (
    <Header classname={"px-6 py-4 border-b borderStyling"}>
      <HeaderText type="primary">My Note</HeaderText>
      <Group className="relative my-2">
        <Input
          type="text"
          name="queryNote"
          // value={}
          // onChange={}
          placeholder="Search note"
          // onKeyDown={}
          classname={"w-full"}
          // disabled={}
        />
        <LuSearch className="absolute top-2.5 left-2 text-sm text-slate-600 dark:text-slate-300" />
      </Group>
      <Button type="colors" classname={"w-full flex"} onclick={() => {}}>
        <LuPlus className="text-base" />
        New note
      </Button>
    </Header>
  );
}
