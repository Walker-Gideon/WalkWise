import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Conditional from "/src/components/Conditional";

import useTodayFlashcards from "../hooks/useTodayFlashcards";

export default function DashboardOverView() {
  const { todayFlashcards, isPending } = useTodayFlashcards();

  const hasFlashcards = todayFlashcards?.length > 0;

  return (
    <Card classname={"lg:col-span-2"}>
      <HeaderText type="secondary" classname={"mb-4"}>
        Cards Created Today
      </HeaderText>
      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        <Conditional condition={isPending}>
          <Flex variant="center" classname={"h-full w-full"}>
            <Spinner styling={"h-auto"} />
          </Flex>
        </Conditional>

        <Conditional condition={!isPending && hasFlashcards}>
          {todayFlashcards?.map((flashcard) => (
            <FlashcardItem key={flashcard.id} flashcard={flashcard} />
          ))}
        </Conditional>

        <Conditional condition={!isPending && !hasFlashcards}>
          <Flex variant="center" classname={"h-full w-full"}>
            <Paragraph variant="small" classname={"text-slate-400"}>
              No card created today!
            </Paragraph>
          </Flex>
        </Conditional>
      </Group>
    </Card>
  );
}

function FlashcardItem({ flashcard }) {
  const cardCount = flashcard.pairs?.length || 0;

  return (
    <Card>
      <Flex classname={"items-center space-x-4"}>
        <Group classname={"flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}></Group>
        <Group>
          <Paragraph classname={"font-medium primary-text-color"}>
            {flashcard.title || "Untitled Flashcard"}
          </Paragraph>
          <Paragraph variant="small" classname={"secondary-text-color"}>
            {cardCount} card{cardCount !== 1 ? "s" : ""}
          </Paragraph>
        </Group>
      </Flex>
    </Card>
  );
}
