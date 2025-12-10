import { LuArrowLeft, LuFlame, LuCheck } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function StudyFlashcardSummary() {
  function handleBack() {}

  const rounded = "py-2 px-3 text-sm font-medium rounded-full space-x-4";

  return (
    <Container classname={"p-4"}>
      <Header classname={"mb-4 py-6 middle:px-4 lg:px-8"}>
        <Flex classname={"items-center gap-2"}>
          <Button variant="secondary" type="back" onclick={handleBack}>
            <LuArrowLeft className="h-5 w-5" />
          </Button>

          <HeaderText
            classname={"text-xl font-bold text-slate-900 dark:text-white"}
          >
            Review Complete
          </HeaderText>
        </Flex>
      </Header>

      <Group classname={"px-8 medium:px-6 middle:px-8 lg:px-8 space-y-8 primary-text-color my-auto w-full h-full mt-8"}>
        <Group classname={""}>
          <Paragraph classname={"text-5xl font-bold mb-4"}>
            You reviewed all your flashcards.
          </Paragraph>
          <SpanText classname={"medium:text-9xl -rotate-90 transform text-7xl"}>
            🎉
          </SpanText>
        </Group>
        <Group classname={"middle:max-w-3xl maxmid:max-w-2xl mx-auto"}>
          <Paragraph variant="small" classname={"mb-4 font-medium"}>
            How you're doing
          </Paragraph>

          <Flex variant="between" classname={"gap-6"}>
            <Box adjustWidth={true} classname={"flex h-25 w-25 items-center justify-center rounded-full border-8 border-green-200 text-green-200 dark:border-green-300/30 dark:text-green-300/30"}>
              <LuCheck className="h-16 w-16" />
            </Box>

            <Flex classname={"flex-col gap-3"}>
              <Flex variant="between" classname={`${rounded} bg-green-200 text-green-900 dark:bg-green-300/30 dark:text-white`}>
                <SpanText>Completed</SpanText>
                <SpanText>X</SpanText>
              </Flex>
              <Flex variant="between" classname={`${rounded} bg-slate-500 text-white`}>
                <SpanText>Terms left</SpanText>
                <SpanText>0</SpanText>
              </Flex>
            <Paragraph variant="small" classname={"flex items-center gap-1"}>
              <LuFlame />
              Current Streak : X day
            </Paragraph>
            </Flex>
          </Flex>
        </Group>

        {/* <div className="medium:mt-8 mt-10 flex w-full justify-between gap-4">
          <Button
            //   variant="outline"
            classname="cursor-pointer dark:text-white flex items-center gap-1 text-sm"
            onclick={() => {}}
          >
            Review Again
          </Button>

          <Button
            //   variant="outline"
            //   classname="primaryButton"
            onclick={() => {}}
            classname="btn-primary"
          >
            Back to Flashcard
          </Button>
        </div> */}
      </Group>
    </Container>
  );
}
