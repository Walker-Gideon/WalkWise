import { LuX, LuArrowLeft } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

export default function AuthCloseButton({ showBack }) {
  return (
    <Flex classname={`${showBack ? "justify-between" : "justify-end"} absolute top-0 left-0 z-10 w-full items-center px-4 mt-4`}>
      {showBack && (
        <Button 
          to="/sign-in"
          type="buttonText"
          aria-label="Back"
        >
          <LuArrowLeft className={"w-7 h-7 font-bold"} />
        </Button>
      )}
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
