import { useEffect, useState, useCallback } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("system");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = useCallback((newTheme) => {
    if (newTheme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (newTheme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      const isDark = darkQuery.matches;
      if (isDark) element.classList.add("dark");
      else element.classList.remove("dark");
    }
  }, [darkQuery, element]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved || "system";
    setTheme(initial);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    const handler = (e) => {
      if (!localStorage.getItem("theme")) { 
        const isDark = e.matches;
        if (isDark) element.classList.add("dark");
        else element.classList.remove("dark");
      }
    };

    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, [darkQuery, element]);

  return [theme, setTheme]; 
}