import { LuX } from "react-icons/lu";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

export default function AuthCloseButton() {
  return (
    <Flex classname="w-full items-end justify-end">
      <Button to="/">
        <LuX className="text-2xl font-bold" />
      </Button>
    </Flex>
  );
}
