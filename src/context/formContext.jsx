import React, { createContext, useReducer } from "react";

export const FormContext = createContext();

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM": // select between "vanilla" and "react-hook-form"
      return { ...state, form: action.payload };
    case "CHANGE_AUTH_FUNCTION": // select between various auth functions (SignIn, SignUp, UpdateEmail, UpdatePassword, DeleteAccount)
      return { ...state, authFunction: action.payload };
    case "CHANGE_VALIDATION": // select between validation "yes" and "no" (checkbox)
      return { ...state, validation: action.payload };
    default:
      return state;
  }
  // return 'supabase' // this will work without the switch statement as a test.
};

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(FormReducer, {
    form: "vanilla",
    authFunction: "SignIn",
    validation: false, // validation will ALWAYS be "yes" for "react-hook-form" and optional for "vanilla".
  });

  const changeForm = (database) => {
    dispatch({ type: "CHANGE_FORM", payload: database });
  };

  const changeAuthFunction = (authFunction) => {
    dispatch({ type: "CHANGE_AUTH_FUNCTION", payload: authFunction });
  };

  const changeValidation = (validation) => {
    dispatch({ type: "CHANGE_VALIDATION", payload: validation });
  };

  return (
    <FormContext.Provider
      value={{
        ...state,
        changeForm,
        changeAuthFunction,
        changeValidation,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
