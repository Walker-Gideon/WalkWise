import toast from "react-hot-toast";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Menus from "/src/components/Menus";
import Card from "/src/components/Card";
import Spinner from "/src/ui/Spinner";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../context/FlashcardContext";
import { useFetchCards, isPending, error } from "/src/hook/useCards";

export default function StudyFlashcard() {
    const { flashcards } = useFetchCards();
    const { setActiveId, setIsPlay, activeId } = useFlashcard();
   
   const card = flashcards?.find((card) => card.id === activeId)
   console.log(card)

    const title = card?.title 
    const pairs = card?.pairs

    function handleEdit() {
        console.log("Edit")
    }

    function handleDelete() {
        console.log("Delete")
    }

    function handleBack() {
        setActiveId(null)
        setIsPlay(false)
    }

    return (
        <Container classname={"p-4"}>
            <Header classname={"mb-4 py-6 middle:px-4 lg:px-8 flex items-center justify-between"}>
                <Flex classname={"items-center gap-2"}>
                    <Button
                      variant="secondary" 
                      type="back"
                      onclick={handleBack}
                    >
                        <LuArrowLeft className="w-5 h-5" />
                    </Button>
                    <HeaderText classname={"text-xl font-bold text-slate-900 dark:text-white"}>{title}</HeaderText>
                </Flex>

                <Flex classname={"items-center justify-end"}>
                    <Menus>
                        <Menus.Toggle />

                        <Menus.Lists>
                            <Menus.Buttons onClick={handleEdit}>
                                <RiEditLine className="w-4 h-4" />
                                Edit
                            </Menus.Buttons>
                            <Menus.Buttons onClick={handleDelete}>
                                <RiDeleteBin5Line className="w-4 h-4" />
                                Delete
                            </Menus.Buttons>
                        </Menus.Lists>
                    </Menus>
                </Flex>
            </Header>

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