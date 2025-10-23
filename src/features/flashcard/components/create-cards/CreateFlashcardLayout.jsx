import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";

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
  const styling = {
    label:
      "mb-1 block medium:text-xs text-sm font-medium text-slate-500 dark:text-slate-400",
    inputArea: "w-full input text-slate-900 dark:text-white",
  };

  return (
    <Container adjust={true}>
      {/* header */}

      <Box
        adjustWidth={true}
        classname={
          "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[78vh] overflow-y-scroll"
        }
      >
        <Form onsubmit={() => {}}>
          {/* optional tag for set name */}

          {/* input tag */}

          {/* add flashcard button */}

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
