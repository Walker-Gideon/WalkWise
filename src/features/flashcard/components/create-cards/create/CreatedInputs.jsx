import { RiDeleteBin5Line } from "react-icons/ri";

import Container from "/src/ui/Container";
import TextArea from "/src/ui/TextArea";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CreatedInputs() {
  const { pairs, handleDelete, handlePairChange } = useFlashcard();

  return (
    <Container
      adjust={true}
      // medium:h-[41vh] h-[36vh] overflow-y-scroll
      classname={"space-y-6 py-4"}
    >
      {pairs.map((pair, idx) => (
        <Group
          key={idx}
          classname={
            "flex flex-col gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-600"
          }
        >
          <Group>
            <Flex variant="between" classname={"w-full "}>
              <Label htmlfor={`term-${idx}`} classname={"label"}>
                Term{" "}
                {pairs.length > 2 ? `#${idx + 1}` : idx === 0 ? "#1" : "#2"}
              </Label>
              <Button
                variant="secondary"
                classname={"mb-4"}
                onclick={handleDelete}
              >
                <RiDeleteBin5Line className="icons text-slate-500 dark:text-slate-200" />
              </Button>
            </Flex>
            <Input
              id={`term-${idx}`}
              name={`term-${idx}`}
              type="text"
              value={pair.term}
              onChange={(e) => handlePairChange(idx, "term", e.target.value)}
              placeholder="Enter term..."
              classname={"w-full text-slate-900 dark:text-white input"}
              // disabled={}
            />
          </Group>
          <Group>
            <Label htmlfor={`definition-${idx}`} classname={"label"}>
              Definition{" "}
              {pairs.length > 2 ? `#${idx + 1}` : idx === 0 ? "#1" : "#2"}
            </Label>
            <TextArea
              id={`definition-${idx}`}
              name={`definition-${idx}`}
              rows={2}
              value={pair.definition}
              onChange={(e) =>
                handlePairChange(idx, "definition", e.target.value)
              }
              resize={true}
              classname={"w-full text-slate-900 dark:text-white input"}
              placeholder="Enter definition..."
              // disabled={}
            />
          </Group>
        </Group>
      ))}
    </Container>
  );
}
