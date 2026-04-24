import { LuX } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

export default function AuthCloseButton() {
  return (
    <Flex classname={"w-full items-end justify-end px-4"}>
      <Button 
        to="/"
        type="buttonText"
        aria-label="Close"
      >
        <LuX className={"w-7 h-7 font-bold"} />
      </Button>
    </Flex>
  );
}
