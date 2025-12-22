import { LuSearch } from "react-icons/lu";

import Filter from "/src/components/Filter";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CardsSubHeader() {
  const {
    query,
    setSort,
    setQuery
  } = useFlashcard();

  return (
    <Group classname={"sticky top-20.5 z-30 py-6 h-20 transition-colors duration-300 bg-slate-50 dark:bg-slate-800"}>
    <Flex variant="between" classname={" gap-1"}>
      <Group classname={"relative w-[50vw]"}>
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

      <Group>
        <Filter />
      </Group>
    </Flex>
    </Group>
  );
}
