import { LuSearch } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Filter from "/src/components/Filter";
import InitCardActionButton from "./InitCardActionButton";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CardsSubHeader() {
  const {
    query,
    setQuery
  } = useFlashcard();

  return (
    <Group classname={"sticky top-20.5 z-30 py-6 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"}>
    <Flex variant="between" classname={"gap-5 md:gap-1 flex-col md:flex-row"}>
      <Group classname={"relative w-full md:w-[50vw]"}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search flashcards"
          classname={"w-full bg-transparent dark:text-white"}
        />
        <LuSearch className="absolute top-2.5 right-2 text-sm text-slate-600 dark:text-slate-300" />
      </Group>

      <Flex variant="between" classname={"w-full md:w-auto"}>
        <FilterDirection align="right" styling={false} />
        <FilterDirection styling={true} />
        <InitCardActionButton styling={true} />
      </Flex>
    </Flex>
    </Group>
  );
}

function FilterDirection({ align = "left", styling }) {
  return (
    <Group classname={`${styling ? "md:hidden" : "hidden md:block"}`}>
      <Filter align={align} options={[
        { value: "title", label: "Flashcard name" },
        { value: "count", label: "Number of cards" },
        { value: "time", label: "Time created" },
      ]} />
    </Group>
  );
}
