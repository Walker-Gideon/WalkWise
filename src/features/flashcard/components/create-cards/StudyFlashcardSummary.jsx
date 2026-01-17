import { useState, useEffect } from "react"
import { LuArrowLeft, LuFlame, LuCheck } from "react-icons/lu";
import { useSearchParams, useLocation } from "react-router-dom";

import HeaderText from "/src/ui/HeaderText";
import Menus from "/src/components/Menus";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

import { useUpdateSession } from "/src/features/schedule/hooks/useUpdateSession";
import { useFlashcard } from "../../context/FlashcardContext";
import { useGeneral } from "/src/contexts/GeneralContext";
import { useUserData } from "/src/user/hook/useUserData";
import { useFetchCards } from "/src/hook/useCards";
import { formatTime } from "/src/helper/helpers";

export default function StudyFlashcardSummary() {
  /* eslint-disable no-unused-vars */
  const { setFinished, activeId } = useFlashcard();
  const { updateSession } = useUpdateSession();
  const { flashcards } = useFetchCards();
  const { userData } = useUserData();
  const { studyTime } = useGeneral();

  const [searchParams, setSearchParams] = useSearchParams();
  const [count, setCount] = useState(0);

  const location = useLocation();
  const sessionId = searchParams.get("session");

  useEffect(() => {
    if (sessionId) {
      updateSession({ id: sessionId, data: { status: 'completed', completedAt: new Date() }, silent: true });
    }
  }, [sessionId, updateSession]);

  const card = flashcards?.find((card) => card.id === activeId);
  const pairs = card?.pairs;
  const cardLength = pairs?.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 10) {
      setTimeout(() => {
        handleToFlashcard()
      }, 1000);
    }
  }, [count]);

  function handleToFlashcard() {
    setFinished(false);
    const previousFilter = location.state?.previousFilter || "title";
    setSearchParams({ filter: previousFilter });
  }

  function handleBack() {
    setFinished(false);
  }

  const rounded = "py-2 px-3 text-sm font-medium rounded-full space-x-4";

  return (
    <Container classname={"p-4"}>
      <InnerHeader 
        onHandleBack={handleBack} 
        onHandleAgain={handleBack} 
        onHandleToFlashcard={handleToFlashcard}
      />

      <Group classname={"px-8 medium:px-6 middle:px-8 lg:px-14 space-y-8 primary-text-color my-auto w-full h-full mt-8"}>
        <Group>
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
              {count === 10 ? 
                 <LuCheck className="h-16 w-16" /> : 
                 <SpanText classname={"text-4xl font-bold"}>{count}</SpanText>
              }
            </Box>

            <Flex classname={"flex-col gap-3"}>
              <Flex variant="between" classname={`${rounded} bg-green-200 text-green-900 dark:bg-green-300/30 dark:text-white`}>
                <SpanText>Completed</SpanText>
                <SpanText>{cardLength}</SpanText>
              </Flex>
              <Flex variant="between" classname={`${rounded} bg-slate-500 text-white`}>
                <SpanText>Timing</SpanText>
                <SpanText>{formatTime(studyTime)}</SpanText>
              </Flex>
            <Paragraph variant="small" classname={"flex items-center gap-1"}>
              <LuFlame />
              Current Streak : {userData?.streakCount} day
            </Paragraph>
            </Flex>
          </Flex>
        </Group>
      </Group>
    </Container>
  );
}

function InnerHeader({ onHandleBack, onHandleAgain, onHandleToFlashcard }) {
  return (
    <Header classname={"mb-4 py-6 flex items-center justify-between medium:px-4 middle:px-6 lg:px-8"}>
      <Flex classname={"items-center gap-2"}>
        <Button variant="secondary" type="back" onclick={onHandleBack}>
          <LuArrowLeft className="h-5 w-5" />
        </Button>

        <HeaderText
            classname={"text-xl font-bold text-slate-900 dark:text-white"}
          >
          Review Complete
        </HeaderText>
      </Flex>

      <Menus>
        <Menus.Toggle />

        <Menus.Lists>
          <Menus.Buttons onClick={onHandleAgain}>Review Again</Menus.Buttons>
          <Menus.Buttons onClick={onHandleToFlashcard}>Back to Flashcard</Menus.Buttons>
        </Menus.Lists>
      </Menus>
    </Header>
  )
}