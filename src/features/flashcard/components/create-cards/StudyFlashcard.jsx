import toast from "react-hot-toast";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import StudyFlashcardHeader from "./StudyFlashcardHeader";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../context/FlashcardContext";
import { useFetchCards, isPending, error } from "/src/hook/useCards";

export default function StudyFlashcard() {
    const { flashcards } = useFetchCards();
    const { activeId } = useFlashcard();
   
   const card = flashcards?.find((card) => card.id === activeId)
   console.log(card)

    const title = card?.title 
    const pairs = card?.pairs

    return (
        <Container classname={"p-4"}>
            <StudyFlashcardHeader title={title} />

            {isPending ? (
                <Spinner />
            ) : (
                <Flex variant="center" classname={"px-8 flex-col gap-8"}>
                <Card classname={"flex items-center justify-center w-full md:mx-auto md:max-w-3xl h-85 medium:h-85 lg:max-w-2xl"}>
                    <Paragraph>Term</Paragraph>
                    <Paragraph>Definition</Paragraph>
                </Card>

                <Group classname={"flex items-center gap-8"}>
                    <Button variant="secondary" type="border" classname={"rounded-full p-3 borderStyling"}>
                        <LuArrowLeft className="icons" />
                    </Button>
                    <Group>
                        <Paragraph classname={"text-xl font-bold primary-text-color"}>
                            X
                        </Paragraph>
                    </Group>
                    <Button variant="secondary" type="border" classname={"rounded-full p-3 borderStyling"}>
                        <LuArrowRight className="icons" />
                    </Button>
                </Group>
            </Flex>
            )}
            {error && toast.error("Error fetching flashcards")}
        </Container>
    );
}