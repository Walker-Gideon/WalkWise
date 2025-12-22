import { useSearchParams } from "react-router-dom";

import Menus from "./Menus";

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get("filter") || "title";

    function handleClick(value) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("filter", value);
        setSearchParams(newParams);
    }

    const styling = "bg-slate-100 dark:bg-slate-800 font-medium";

    return (
        <Menus>
          <Menus.Toggle type={true} />
          <Menus.Lists>
            <Menus.Buttons 
                onClick={() => handleClick("title")}
                className={currentFilter === "title" ? `${styling}` : ""}
            >
              Flashcard name 
            </Menus.Buttons>

            <Menus.Buttons 
                onClick={() => handleClick("count")}
                className={currentFilter === "count" ? `${styling}` : ""}
            >
              Number of cards 
            </Menus.Buttons>

            <Menus.Buttons 
                onClick={() => handleClick("time")}
                className={currentFilter === "time" ? `${styling}` : ""}
            >
              Time created 
            </Menus.Buttons>
          </Menus.Lists>
        </Menus>
    );
}