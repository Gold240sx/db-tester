import { useContext } from "react";
import { FormContext } from "../context/formContext";

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm() must be used within a DatabaseProvider");
  }

  return context;
};
