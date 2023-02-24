import React, { createContext, useReducer } from "react";

export const FormContext = createContext();

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM":
      return { ...state, form: action.payload };
    default:
      return state;
  }
  // return 'supabase' // this will work without the switch statement as a test.
};

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(FormReducer, {
    form: "vanilla",
  });

  const changeForm = (database) => {
    dispatch({ type: "CHANGE_FORM", payload: database });
  };

  return (
    <FormContext.Provider value={{ ...state, changeForm }}>
      {children}
    </FormContext.Provider>
  );
}
