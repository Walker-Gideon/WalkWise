import { createContext } from "react";

import { TbDotsVertical } from "react-icons/tb";

import UnorderedList from "/src/ui/UnorderedList";
import Button from "/src/ui/Button";
import List from "/src/ui/List";

const MenusContext = createContext();

export default function Menus({children}) {
    return (
        <MenusContext.Provider value={{}}>
            {children}
        </MenusContext.Provider>
    );
}

function Toggle({id}) {
    <Button>
        <TbDotsVertical />
    </Button>
}

function Lists({children}) {
    return (
        <UnorderedList>
            {children}
        </UnorderedList>
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
