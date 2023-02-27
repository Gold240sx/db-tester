import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
  // return 'supabase' // this will work without the switch statement as a test.
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, {
    mode: localStorage.theme ? localStorage.theme : "light",
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// import React, { createContext, useContext } from "react";
// import useDarkMode from "../hooks/useDarkMode";

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

//   return (
//     <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   return useContext(ThemeContext);
// }

// export { ThemeProvider, useTheme };
