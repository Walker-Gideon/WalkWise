import { Controller } from "react-hook-form";
import { RiDeleteBin5Line } from "react-icons/ri";

import Flex from "/src/ui/Flex";
import Label from "/src/ui/Label";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Container from "/src/ui/Container";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CreatedInputs({ control }) {
  const { pairs, handleDelete, handlePairChange } = useFlashcard();

  return (
    <Container
      adjust={true}
      classname={"space-y-6 py-4"}
    >
      {pairs.map((pair, idx) => (
        <Group
          key={idx}
          classname={
            "flex flex-col gap-4 rounded-lg bg-white p-4 dark:bg-slate-600"
          }
        >
          <Group>
            <Flex variant="between" classname={"w-full "}>
              <Label htmlfor={`term-${idx}`} classname={"label"}>
                Term {idx + 1}
              </Label>
              <Button
                variant="secondary"
                classname={"mb-4"}
                onclick={handleDelete}
                disabled={pairs.length <= 2}
              >
                <RiDeleteBin5Line className={`icons ${pairs.length <= 2 ? "text-slate-300 dark:text-slate-500 cursor-not-allowed" : "text-slate-500 dark:text-slate-200"}`} />
              </Button>
            </Flex>

            <Controller
              name={`pairs.${idx}.term`}
              control={control}
              defaultValue={pair.term}
              render={({ field }) => (
                <input
                  {...field}
                  id={`term-${idx}`}
                  placeholder="Enter term..."
                  className="input w-full text-slate-900 dark:text-white"
                  onChange={(e) => {
                    field.onChange(e);
                    handlePairChange(idx, "term", e.target.value);
                  }}
                />
              )}
            />
          </Group>

          <Group>
            <Label htmlfor={`definition-${idx}`} classname={"label"}>
              Definition {idx + 1}
            </Label>

            {/* DEFINITION */}
            <Controller
              name={`pairs.${idx}.definition`}
              control={control}
              defaultValue={pair.definition}
              render={({ field }) => (
                <textarea
                  {...field}
                  id={`definition-${idx}`}
                  rows={2}
                  className="input w-full resize-none text-slate-900 dark:text-white"
                  placeholder="Enter definition..."
                  onChange={(e) => {
                    field.onChange(e);
                    handlePairChange(idx, "definition", e.target.value);
                  }}
                />
              )}
            />
          </Group>
        </Group>
      ))}
    </Container>
  );
}
