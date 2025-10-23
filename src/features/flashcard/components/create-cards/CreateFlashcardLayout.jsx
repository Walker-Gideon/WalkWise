import { RiDeleteBin5Line } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Button from "/src/ui/Button";
import Header from "/src/ui/Header";
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
      <Header type="padding" classname={""}>
        <HeaderText variant="header">Create A New flashcard Set</HeaderText>
      </Header>

      <Box
        adjustWidth={true}
        classname={
          "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[70vh] bg-blue-500"
        }
      >
        <Form className={"space-y-2"} onsubmit={() => {}}>
          {/* input tag */}
          <Container
            adjust={true}
            classname={
              "medium:h-[41vh] medium:px-4 h-[36vh] space-y-6 overflow-y-scroll"
            }
          >
            {/* Will map here to add more input tag */}
            <Group
              classname={
                "flex flex-col gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-600"
              }
            >
              <Group>
                <Flex variant="between" classname={"w-full"}>
                  <Label classname={styling.label}>Term</Label>
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
                <label className={styling.label}>Definition</label>
                <textarea
                  rows={2}
                  className={`resize-none ${styling.inputArea}`}
                  placeholder="Enter definition..."
                />
              </Group>
            </Group>
          </Container>

          {/* add flashcard button */}

          {/* optional tag for set name */}

          {/* action button */}

          {/* notify information */}
        </Form>
      </Box>
    </Container>
  );
}
