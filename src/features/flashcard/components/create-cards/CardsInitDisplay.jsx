import { LuSearch } from "react-icons/lu";

import CardContentDisplay from "./cards/CardContentDisplay";
import CardHeader from "./cards/CardHeader";
import Input from "/src/ui/Input";
import Flex from "/src/ui/Flex";

export default function CardsInitDisplay() {
  return (
    <>
      <CardHeader />
      <Flex
        // medium:max-w-80  middle:max-w-xl
        classname={
          "items-end justify-end medium:my-6 medium:max-w-xl relative w-full ml-auto mr-6"
        }
      >
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
      </Flex>
      <CardContentDisplay />
    </>
  );
}
