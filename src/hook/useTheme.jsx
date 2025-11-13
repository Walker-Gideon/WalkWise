import { useEffect, useState } from "react";

export default function useTheme() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "system");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (themeValue) => {
    if (themeValue === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (themeValue === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      if (darkQuery.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const changeHandler = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", changeHandler);

    return () => darkQuery.removeEventListener("change", changeHandler);
  }, []);

  return [theme, setTheme];
}
