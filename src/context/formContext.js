import React, { useState, useContext, createContext } from "react";
import vanillaForm from "./vanillaForm";
import reactForm from "./reactForm";
import { ReactHookForm } from "./reactHookForm";
import { FormProvider } from "react-hook-form";

// Define the form context
const FormContext = createContext();

// Define the form provider component
function FormProviderComponent({ children }) {
  // Initialize the state for the selected form type
  const [formType, setFormType] = useState("customSignIn");

  // Define the function for toggling the form type
  function toggleFormType(formType) {
    setFormType(formType);
  }

  // Define the function for rendering the selected form
  function renderForm() {
    switch (formType) {
      case "vanillaForm":
        return <CustomSignInForm />;
      case "reactForm":
        return (
          <FormProvider>
            <ReactHookForm />
          </FormProvider>
        );
      default:
        return null;
    }
  }

  // Define the context value
  const contextValue = {
    formType,
    toggleFormType,
    renderForm,
  };

  // Render the context provider with the children and the context value
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

// Define a custom hook for accessing the form context
function useFormContext() {
  return useContext(FormContext);
}

export { FormProviderComponent, useFormContext };
