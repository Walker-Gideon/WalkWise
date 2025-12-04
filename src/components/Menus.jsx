import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { TbDotsVertical } from "react-icons/tb";

import UnorderedList from "/src/ui/UnorderedList";
import Button from "/src/ui/Button";
import List from "/src/ui/List";

const MenusContext = createContext();

export default function Menus({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const close = () => setIsOpen(false);
    const open = setIsOpen;

    return (
        <MenusContext.Provider value={{open, close, isOpen, position, setPosition}}>
            {children}
        </MenusContext.Provider>
    );
}

function Toggle() {
    const {open, close, isOpen} = useContext(MenusContext);

    function handleClick() {
        isOpen ? close() : open();
    }

    return (
        <Button variant="secondary" type="border" classname={"borderStyling rounded-sm p-2 font-semibold"} onclick={handleClick}>
            <TbDotsVertical className="secondary-text-color h-4 w-5" />
        </Button>
    );
}

function Lists({children}) {
    return createPortal (
        <UnorderedList>
            {children}
        </UnorderedList>,
        document.body
    );
}

function Buttons({children}) {
    return (
        <List>
            <Button>
                {children}
            </Button>
        </List>
    );
}

Menus.Toggle = Toggle;
Menus.Lists = Lists;
Menus.Buttons = Buttons;


/*
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`;
// Menus.Menu = Menu;
*/
