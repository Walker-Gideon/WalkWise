/*
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
*/

import { useEffect, useState, useCallback } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = useCallback((newTheme) => {
    if (newTheme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setResolvedTheme("dark");
    } else if (newTheme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setResolvedTheme("light");
    } else {
      // system mode
      localStorage.removeItem("theme");
      const isDark = darkQuery.matches;
      if (isDark) element.classList.add("dark");
      else element.classList.remove("dark");
      setResolvedTheme(isDark ? "dark" : "light");
    }
  }, [darkQuery]);

  // Load saved theme safely on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved || "system";
    setTheme(initial);
    applyTheme(initial);
  }, [applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const handler = (e) => {
      if (!localStorage.getItem("theme")) { // only react if in "system" mode
        const isDark = e.matches;
        if (isDark) element.classList.add("dark");
        else element.classList.remove("dark");
        setResolvedTheme(isDark ? "dark" : "light");
      }
    };

    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, [darkQuery, element]);

  return { theme, setTheme, resolvedTheme };   // ← Changed to object (cleaner)
}