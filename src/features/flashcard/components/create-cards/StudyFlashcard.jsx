import { LuArrowLeft } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";

export default function StudyFlashcard() {
    /*
    1. header ( card title, menu button [back, delete, edit])
    2. Card content (term, definition)
    3. if study card successiful display success message on display
    */ 

    function handleEdit() {
        
    }

    function handleDelete() {
        
    }

    function handleBack() {
        
    }

    return (
        <Container classname={"p-4"}>
            <Header classname={"mb-4 px-8 flex items-center justify-between"}>
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
                <Buttons handleDelete={handleDelete} handleEdit={handleEdit} />
            </Header>
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