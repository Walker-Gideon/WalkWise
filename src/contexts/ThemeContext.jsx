import { createContext, useEffect, useState, useCallback } from "react";

export const ThemeContext = createContext();
export { useThemeContext } from "./useThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Initial sync with localStorage to avoid flash
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });

  const applyTheme = useCallback((newTheme) => {
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        const element = document.documentElement;
        if (e.matches) element.classList.add("dark");
        else element.classList.remove("dark");
      }
    };

    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
