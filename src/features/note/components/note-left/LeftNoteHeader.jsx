import { useSearchParams } from "react-router-dom";
import { LuPlus, LuSearch } from "react-icons/lu";

import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import HeaderText from "/src/ui/HeaderText";

import { useNote } from "../../context/NoteContext";

export default function LeftNoteHeader() {
  const { query, setQuery, isDisplayNote, setIsDisplayNote } = useNote();

  const [searchParams, setSearchParams] = useSearchParams();
  
  const noteId = searchParams.get("noteId");
  const isCreatingNewNote = isDisplayNote && !noteId;

  return (
    <Header type={"padding"} classname={"border-b borderStyling"}>
      <HeaderText type="primary">My Note</HeaderText>
      <Group classname={"relative my-2"}>
        <Input
          type="text"
          name="queryNote"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search note"
          classname={"w-full pl-7 dark:text-white"}
        />
        <LuSearch className="absolute top-2.5 left-2 text-sm text-slate-600 dark:text-slate-300" />
      </Group>
      <Button
        type="colors"
        classname={"w-full flex items-center justify-center gap-0.5"}
        disabled={isCreatingNewNote}
        onclick={() => {
          setIsDisplayNote(true);
          setSearchParams({});
        }}
      >
        <LuPlus className="h-3.5 w-3.5 text-white" />
        New note
      </Button>
    </Header>
  );
}
