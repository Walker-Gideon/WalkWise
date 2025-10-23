import { RiDeleteBin5Line } from "react-icons/ri";

import Heading from "/src/components/Heading";
import Container from "/src/ui/Container";
import TextArea from "/src/ui/TextArea";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function CreateFlashcardLayout() {
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
          "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[70vh] bg-blue-500"
        }
      >
        <Form className={"space-y-2"} onsubmit={() => {}}>
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
            classname={"space-y-6"}
          >
            {/* Will map here to add more input tag */}
            <Group
              classname={
                "flex flex-col gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-600"
              }
            >
              <Group>
                <Flex variant="between" classname={"w-full"}>
                  <Label htmlfor={``} classname={styling.label}>
                    Term
                  </Label>
                  <Button>
                    <RiDeleteBin5Line className="icons" />
                  </Button>
                </Flex>
                <Input
                  id={``}
                  name={``}
                  type="text"
                  // value={}
                  // onChange={}
                  placeholder="Enter term..."
                  classname={styling.inputArea}
                  // disabled={}
                />
              </Group>
              <Group>
                <Label htmlfor={``} classname={styling.label}>
                  Definition
                </Label>
                <TextArea
                  id={``}
                  name={``}
                  rows={2}
                  // value={}
                  // onChange={}
                  classname={styling.inputArea}
                  placeholder="Enter definition..."
                  // disabled={}
                />
              </Group>
            </Group>
          </Container>

          {/* add flashcard button */}
          <Flex classname={"items-center justify-end px-8"}>
            <Button type="colors" classname={"px-8"}>
              Add Card
            </Button>
          </Flex>

          {/* action button */}

          {/* notify information */}
        </Form>
      </Box>
    </Container>
  );
}
