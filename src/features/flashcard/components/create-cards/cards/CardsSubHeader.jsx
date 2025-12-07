import { LuSearch } from "react-icons/lu";

import Menus from "/src/components/Menus";
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
    <Flex variant="between" classname={"my-6 gap-1"}>
      <Group>
        <Menus>
          <Menus.Toggle type={true} align="left" />
          <Menus.Lists>
            <Menus.Buttons onClick={() => setSort("title")}>
              Flashcard name 
            </Menus.Buttons>
            <Menus.Buttons onClick={() => setSort("count")}>
              Number of cards 
            </Menus.Buttons>
            <Menus.Buttons onClick={() => setSort("time")}>
              Time created 
            </Menus.Buttons>
          </Menus.Lists>
        </Menus>
      </Group>

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
    </Flex>
  );
}
