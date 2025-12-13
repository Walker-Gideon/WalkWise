import { BiMenuAltLeft } from "react-icons/bi"

import Button from "/src/ui/Button";

export default function MenuButton() {
    function handleToggle() {
        console.log("Menu click")
    }

    return (
        <Button 
            variant="secondary"
            onclick={handleToggle} 
            classname={"md:hidden h-8 p-1 my-2 rounded-sm hover:bg-slate-100 transition-colors duration-300 dark:hover:bg-slate-800"}
        >
            <BiMenuAltLeft className="secondary-text-color h-6 w-6" />
        </Button>
    )
}