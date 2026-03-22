import { LuActivity } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Conditional from "/src/components/Conditional";

import useTodayFlashcards from "../hooks/useTodayFlashcards";

export default function DashboardOverView() {
  const { todayFlashcards, isPending } = useTodayFlashcards();

  const hasFlashcards = todayFlashcards?.length > 0;

  return (
    <Card classname={"lg:col-span-2"}>
      <HeaderText type="semiHeader">
        <LuActivity className="icons" />
        <SpanText>Cards Created Today</SpanText>
      </HeaderText>
      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        <Conditional condition={isPending}>
          <Spinner secondary={true} styling={"h-full"} />
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
    <Card status={true}>
      <Flex classname={"items-center space-x-4"}>
        <Group classname={"flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}></Group>
        <Group classname={"flex-1 min-w-0"}>
          <Paragraph classname={"text-sm medium:text-base font-medium primary-text-color truncate"}>
            {flashcard.title || "Untitled Flashcard"}
          </Paragraph>
          <Paragraph classname={"secondary-text-color text-xs medium:text-sm"}>
            {cardCount} card{cardCount !== 1 ? "s" : ""}
          </Paragraph>
        </Group>
      </Flex>
    </Card>
  );
}
