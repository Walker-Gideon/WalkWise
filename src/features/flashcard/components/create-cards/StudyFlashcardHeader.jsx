import { LuArrowLeft } from "react-icons/lu";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";
import { useSearchParams, useLocation } from "react-router-dom";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import SpanText from "/src/ui/SpanText";
import Menus from "/src/components/Menus";
import HeaderText from "/src/ui/HeaderText";

import { useFlashcard } from "../../context/FlashcardContext";

export default function StudyFlashcardHeader({ title, onIsDeleteModal, timer }) {
    const { setIsPlay, setEditingId, activeId, setIsDisplay } = useFlashcard();

    const [searchParams, setSearchParams] = useSearchParams();
    
    const location = useLocation();

    function handleEdit() {
        setEditingId(activeId);
        setIsDisplay(true);
        setIsPlay(false);
    }
    
    function handleDelete() {
        onIsDeleteModal(true)
    }
    
    function handleBack() {
        const previousFilter = location.state?.previousFilter || "title";
        setSearchParams({ filter: previousFilter });
    }

    return (
        <Header classname={"py-4 middle:px-4 lg:px-8 flex items-center justify-between"}>
            <Flex classname={"flex-1 min-w-0 items-center gap-2"}>
                <Button
                  variant="secondary" 
                  type="back"
                  onclick={handleBack}
                >
                    <LuArrowLeft className="w-5 h-5" />
                </Button>
                <HeaderText classname={"text-xl font-bold text-slate-900 dark:text-white max-w-30 middle:max-w-60 truncate"}>{title}</HeaderText>
            </Flex>

            <Flex classname={"items-center justify-end gap-4"}>
                <Group
                  classname={"flex items-center justify-center gap-2 rounded-full px-3 py-2 whitespace-nowrap transition bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}
                >
                    <SpanText classname={"text-xs middle:text-sm font-medium secondary-text-color"}>
                        {timer}
                    </SpanText>
                </Group>
                <Group>
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
                </Group>
            </Flex>
        </Header>
    );
}