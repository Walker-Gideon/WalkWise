import { useSearchParams } from "react-router-dom";

import Menus from "./Menus";

export default function Filter({ options = [] }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get("filter") || options[0]?.value || "";

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
            {options.map((option) => (
              <Menus.Buttons
                key={option.value}
                onClick={() => handleClick(option.value)}
                className={currentFilter === option.value ? `${styling}` : ""}
              >
                {option.label}
              </Menus.Buttons>
            ))}
          </Menus.Lists>
        </Menus>
    );
}