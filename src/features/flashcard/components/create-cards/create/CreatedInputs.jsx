import { Controller } from "react-hook-form";
import { RiDeleteBin5Line } from "react-icons/ri";

import Container from "/src/ui/Container";
import TextArea from "/src/ui/TextArea";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../../context/FlashcardContext";

export default function CreatedInputs({ control }) {
  const { pairs, handleDelete, handlePairChange } = useFlashcard();

  // const { handleSubmit, register, reset, getValues, formState } = useForm();

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
                Term {idx + 1}
              </Label>
              <Button
                variant="secondary"
                classname={"mb-4"}
                onclick={handleDelete}
              >
                <RiDeleteBin5Line className="icons text-slate-500 dark:text-slate-200" />
              </Button>
            </Flex>
            {/* <Input
              id={`term-${idx}`}
              name={`term-${idx}`}
              type="text"
              value={pair.term}
              onChange={(e) => handlePairChange(idx, "term", e.target.value)}
              placeholder="Enter term..."
              classname={"w-full text-slate-900 dark:text-white input"}
              disabled={}
            /> */}
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
            {/* <TextArea
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
              disabled={}
            /> */}

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
