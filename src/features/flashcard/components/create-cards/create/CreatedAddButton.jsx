import { LuPlus } from "react-icons/lu";

import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";

export default function CreatedAddButton({ pairs, onPairs, MAX_PAIRS }) {
  return (
    <Flex classname={"items-center justify-end"}>
      <Button
        type="colors"
        classname={"px-6 flex items-center gap-1"}
        onclick={(e) => {
          e.preventDefault();

          const newPair = { term: "", definition: "" };

          if (pairs.length < MAX_PAIRS) {
            const updated = [...pairs, newPair];
            onPairs(updated);
          }
        }}
        disabled={pairs.length === MAX_PAIRS}
      >
        <LuPlus className={"h-4 w-4 text-white"} />
        Add Card
      </Button>
    </Flex>
  );
}
