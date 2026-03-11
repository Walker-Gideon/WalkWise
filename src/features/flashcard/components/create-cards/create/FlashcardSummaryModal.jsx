import { useState, useEffect } from "react"
import { LuFlame, LuCheck } from "react-icons/lu";
import { useSearchParams, useLocation } from "react-router-dom";

import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";
import Model from "/src/components/Model";

import { formatTime } from "/src/helper/helpers";
import { useFetchCards } from "/src/hook/useCards";
import { useUserData } from "/src/user/hook/useUserData";
import { useGeneral } from "/src/contexts/GeneralContext";
import { useFlashcard } from "../../../context/FlashcardContext";
import { useUpdateSession } from "/src/features/schedule/hooks/useUpdateSession";

export default function FlashcardSummaryModal() {
     /* eslint-disable no-unused-vars */
    const { studyTime } = useGeneral();
    const { userData } = useUserData();
    const { flashcards } = useFetchCards();
    const { updateSession } = useUpdateSession();
    const { setFinished, activeId } = useFlashcard();

    const [count, setCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();
    const sessionId = searchParams.get("session");

    useEffect(() => {
        if (sessionId) {
            updateSession({ 
                id: sessionId, 
                data: { 
                    status: 'completed', 
                    completedAt: new Date(),
                    duration: studyTime
                }, 
                silent: true 
            });
        }
    }, [sessionId, updateSession, studyTime]);

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
        if (count === 5) { 
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

    const rounded = "py-2 px-3 text-sm font-medium rounded-full space-x-4";

    return (
        <Model styling={"primary-text-color"}>
            <Group>
                <Paragraph classname={"text-2xl font-bold mb-4"}>
                    You reviewed all your flashcards.
                </Paragraph>
                <SpanText classname={"flex flex-col items-center justify-center text-5xl"}>
                    🎉🎉🎉🎉🎉
                </SpanText>
            </Group>

            <Group>
                <Paragraph variant="small" classname={"mt-6 mb-4 font-medium"}>
                    How you're doing
                </Paragraph>

                <Flex variant="between" classname={"gap-6 mx-5"}>
                    <Box adjustWidth={true} classname={"flex h-25 w-25 items-center justify-center rounded-full border-8 border-green-200 text-green-200 dark:border-green-300/30 dark:text-green-300/30"}>
                        {count === 5 ? 
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
        </Model>
    );
}