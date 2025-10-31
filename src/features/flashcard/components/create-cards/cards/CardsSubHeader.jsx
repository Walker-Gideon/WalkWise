import { LuSearch } from "react-icons/lu";

import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Flex from "/src/ui/Flex";

export default function CardsSubHeader() {
  return (
    <Flex
      variant="between"
      // medium:max-w-80  middle:max-w-xl medium:max-w-xl items-end justify-end
      classname={"medium:my-6 px-6"}
    >
      <Button
        type="border"
        classname={"px-8 border-stone-300"}
        onclick={() => {}}
      >
        Sort By
      </Button>
      <Group classname={"relative w-[50vw]"}>
        <Input
          type="text"
          name="query"
          // value={}
          // onChange={}
          placeholder="Search flashcards"
          // onKeyDown={}
          classname={
            "w-full bg-transparent" //dark:text-white dark:border-slate-700 dark:placeholder:text-slate-400
          }
          // disabled={}
        />
        <LuSearch
          className="absolute top-2.5 right-2 text-sm text-slate-600" //dark:text-slate-300
        />
      </Group>
    </Flex>
  );
}
