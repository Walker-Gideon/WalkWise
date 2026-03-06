import Button from "/src/ui/Button";

import useToggleDisplay from "/src/hook/useToggleDisplay";
import { useFlashcard } from "../../../context/FlashcardContext";

export default function CreatedActionButton() {
    const { setIsDisplay, setIsPlay, editingId, setEditingId, setPairs } = useFlashcard();
    
    let handleCancel;
    const toggleDisplay = useToggleDisplay(setIsDisplay);
    
    function restPairs() {
        setPairs([
            { term: "", definition: "" },
            { term: "", definition: "" },
        ]);
    }
    
    function cancelWhenEditing() {
        setIsDisplay(false);
        setIsPlay(true);
        setEditingId(null);
        restPairs();
    }
    
    function cancelDefault() {
        toggleDisplay();
        restPairs();
    }
    
    if(editingId){
        handleCancel = cancelWhenEditing;
    } else {
        handleCancel = cancelDefault;
    }

    return (
        <>
          <Button
            type="border"
            classname={"px-8 border-stone-300 dark:text-white"}
            onclick={(e) => {
              e.preventDefault();
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            type="colors"
            submit={true}
            classname={`${editingId ? "px-11" : "px-8"}`}
          >
            {editingId ? "Edit" : "Create"}
          </Button>
        </>
    )
}