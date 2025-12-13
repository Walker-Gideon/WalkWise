import { BiMenuAltLeft } from "react-icons/bi"

import Button from "/src/ui/Button";

import { useNav } from "/src/contexts/NavigationContext";

export default function MenuButton() {
    const { setIsMenuClick } = useNav();

    function handleToggle() {
        setIsMenuClick(show => !show)
        // setIsMenuClick(true)
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