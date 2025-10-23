import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";

import Heading from "/src/components/Heading";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import TextArea from "/src/ui/TextArea";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function CreateFlashcardLayout() {
  const [pairs, setPairs] = useState([
    { term: "", definition: "" },
    { term: "", definition: "" },
  ]);
  const [index, setIndex] = useState(0);

  const MAX_PAIRS = 50;

  // Handler to update term or definition in a specific pair
  const handlePairChange = (index, field, value) => {
    const updatedPairs = [...pairs];
    updatedPairs[index][field] = value;
    setPairs(updatedPairs);
  };

  const styling = {
    label:
      "mb-1 block medium:text-xs text-sm font-medium text-slate-500 dark:text-slate-400",
    inputArea: "w-full input text-slate-900 dark:text-white",
  };

  return (
    <Container adjust={true}>
      <Heading
        headerText="Create A New flashcard Set"
        paragraphText="Create, review, and master key concepts effortlessly."
      >
        <Group classname={"space-x-2"}>
          <Button type="danger" classname={"px-8"}>
            Cancel
          </Button>
          <Button type="colors" classname={"px-8"}>
            Create
          </Button>
        </Group>
      </Heading>

      <Box
        adjustWidth={true}
        classname={
          "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[78vh] overflow-y-scroll"
        }
      >
        <Form onsubmit={() => {}}>
          {/* optional tag for set name */}
          <Group>
            <Label htmlfor="tags" classname={styling.label}>
              Tags (optional)
            </Label>
            <Input
              id="tags"
              name="tags"
              type="text"
              // value={}
              // onChange={}
              placeholder="e.g. Biology, Chapter 2"
              classname={styling.inputArea}
              // disabled={}
            />
          </Group>

          {/* input tag */}
          <Container
            adjust={true}
            // medium:h-[41vh] h-[36vh] overflow-y-scroll
            classname={"space-y-6 py-4"}
          >
            {/* Will map here to add more input tag */}
            {pairs.map((pair, idx) => (
              <Group
                key={idx}
                classname={
                  "flex flex-col gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-600"
                }
              >
                <Group>
                  <Flex variant="between" classname={"w-full mb-4"}>
                    <Label htmlfor={`term-${idx}`} classname={styling.label}>
                      Term{" "}
                      {pairs.length > 2
                        ? `#${idx + 1}`
                        : idx === 0
                          ? "#1"
                          : "#2"}
                    </Label>
                    <Button
                      variant="secondary"
                      onclick={(e) => {
                        e.preventDefault();

                        if (pairs.length > 2) {
                          const updatePairs = pairs.filter(
                            (_, i) => i !== index,
                          );

                          setPairs(updatePairs);
                          setIndex((prev) =>
                            prev >= updatePairs.length
                              ? updatePairs.length - 1
                              : prev,
                          );
                        }
                      }}
                    >
                      <RiDeleteBin5Line className="icons text-slate-500 dark:text-slate-200" />
                    </Button>
                  </Flex>
                  <Input
                    id={`term-${idx}`}
                    name={`term-${idx}`}
                    type="text"
                    value={pair.term}
                    onChange={(e) =>
                      handlePairChange(idx, "term", e.target.value)
                    }
                    placeholder="Enter term..."
                    classname={styling.inputArea}
                    // disabled={}
                  />
                </Group>
                <Group>
                  <Label
                    htmlfor={`definition-${idx}`}
                    classname={styling.label}
                  >
                    Definition{" "}
                    {pairs.length > 2 ? `#${idx + 1}` : idx === 0 ? "#1" : "#2"}
                  </Label>
                  <TextArea
                    id={`definition-${idx}`}
                    name={`definition-${idx}`}
                    rows={2}
                    value={pair.definition}
                    onChange={(e) =>
                      handlePairChange(idx, "term", e.target.value)
                    }
                    resize={true}
                    classname={styling.inputArea}
                    placeholder="Enter definition..."
                    // disabled={}
                  />
                </Group>
              </Group>
            ))}
          </Container>

          {/* add flashcard button */}
          <Flex classname={"items-center justify-end"}>
            <Button
              type="colors"
              classname={"px-6 flex items-center gap-1"}
              onclick={(e) => {
                e.preventDefault();

                const newPair = { term: "", definition: "" };

                if (pairs.length < MAX_PAIRS) {
                  const updated = [...pairs, newPair];
                  setPairs(updated);
                }
              }}
              disabled={pairs.length === MAX_PAIRS}
            >
              <LuPlus className={"h-4 w-4 text-white"} />
              Add Card
            </Button>
          </Flex>

          {/* notify information */}
          <Group classname="pt-2 text-right">
            {pairs.length >= MAX_PAIRS && (
              <Paragraph type="information">
                Maximum of {MAX_PAIRS} terms & definitions per card reached.
              </Paragraph>
            )}
          </Group>
        </Form>
      </Box>
    </Container>
  );
}
