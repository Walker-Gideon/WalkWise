import { createContext, useContext } from "react";
import useTheme from "/src/hook/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeValue = useTheme();   // Returns { theme, setTheme, resolvedTheme }

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);