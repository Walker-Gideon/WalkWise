import Group from "/src/ui/Group";
import Button from "/src/ui/Button";

import useToggleDisplay from "/src/hook/useToggleDisplay";
import { useFlashcard } from "../../../context/FlashcardContext";

export default function InitCardActionButton({ styling }) {
    const { setIsDisplay } = useFlashcard();
    
    const handleToggleDisplay = useToggleDisplay(setIsDisplay);

    return (
        <Group classname={`space-x-2 ${styling ? "" : "hidden md:block"}`}>
            <Button type="colors" onclick={handleToggleDisplay}>
                Create Flashcard
            </Button>
        </Group>
    );
}