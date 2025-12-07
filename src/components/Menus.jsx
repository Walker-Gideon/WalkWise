import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { TbDotsVertical } from "react-icons/tb";
import { LuListFilter } from "react-icons/lu";

import { useOutsideClick } from "../hook/useOutsideClick";

const MenusContext = createContext();

export default function Menus({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);

  const close = () => setIsOpen(false);
  const open = setIsOpen;

  return (
    <MenusContext.Provider value={{ isOpen, open, close, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({type = false, align = "right"}) {
  const { isOpen, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    
    // Calculate x based on alignment
    const x = align === "left" 
      ? rect.x 
      : window.innerWidth - rect.width - rect.x;

    setPosition({
      x: x,
      y: rect.y + rect.height + 8,
      align: align // Store alignment to use in Lists
    });

    isOpen ? close() : open(true);
  }

  return (
    <button
      className="cursor-pointer p-1 rounded-sm hover:bg-slate-100 transition-colors duration-300 dark:hover:bg-slate-900"
      onClick={handleClick}
    >
      {type ? (
        <LuListFilter className="secondary-text-color h-6 w-6" /> 
      ):(
        <TbDotsVertical className="secondary-text-color h-6 w-6" />
      )}
    </button>
  );
}

function Lists({ children }) {
  const { isOpen, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (!isOpen) return null;

  const style = {
    top: `${position?.y}px`
  };

  if (position?.align === "left") {
    style.left = `${position?.x}px`;
  } else {
    style.right = `${position?.x}px`;
  }

  return createPortal(
    <ul
      ref={ref}
      className="fixed z-50 bg-white dark:bg-slate-900 shadow-md rounded-md"
      style={style}
    >
      {children}
    </ul>,
    document.body
  );
}

function Buttons({ children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-md dark:hover:bg-slate-700 dark:text-slate-50 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.Lists = Lists;
Menus.Buttons = Buttons;
