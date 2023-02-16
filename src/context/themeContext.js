import React, { createContext, useContext } from "react";
import useDarkMode from "./useDarkMode";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
