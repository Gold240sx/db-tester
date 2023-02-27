import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used within a DatabaseProvider");
  }

  return context;
};
