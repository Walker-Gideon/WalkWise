import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Menus from "/src/components/Menus";
import Card from "/src/components/Card";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useFlashcard } from "../../context/FlashcardContext";

export default function StudyFlashcard() {
    const { setIsPlay } = useFlashcard();
    /*
    1. header ( card title, menu button [back, delete, edit])
    2. Card content (term, definition)
    3. if study card successiful display success message on display
    */ 

    function handleEdit() {
        console.log("Edit")
    }

    function handleDelete() {
        console.log("Delete")
    }

    function handleBack() {
        setIsPlay(false)
    }

    return (
        <Container classname={"p-4"}>
            <Header classname={"mb-4 py-6 px-8 flex items-center justify-between"}>
                <Flex classname={"items-center gap-2"}>
                    <Button
                      variant="secondary" 
                      type="back"
                      onclick={handleBack}
                    >
                        <LuArrowLeft className="w-5 h-5" />
                    </Button>
                    <HeaderText classname={"text-xl font-bold text-slate-900 dark:text-white"}>Title</HeaderText>
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

            <Flex variant="center" classname={"px-8 flex-col gap-8"}>
                <Card classname={"flex items-center justify-center w-full md:mx-auto md:max-w-3xl h-85 medium:h-85"}>
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
        </Container>
    );
}

function Buttons({ handleDelete, handleEdit }) {
    return (
        <Flex classname={"items-center gap-2"}>
            <Button type="danger" onclick={handleDelete}>Delete</Button>
            <Button type="colors" classname={"px-6"} onclick={handleEdit}>Edit</Button>
        </Flex>
    );
}