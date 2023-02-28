import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import EmailUserFormVanilla from "./emailUserFormVanilla.jsx";
import EmailUserFormRHF from "./emailUserFormRHF.jsx";
import EmailUserFormDUI from "./emailUserFormDUI";

export default function EmailUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "EmailUser" && (
        <EmailUserFormVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "EmailUser" && (
        <EmailUserFormRHF />
      )}
      {database && form === "daisyUI" && authFunction === "EmailUser" && (
        <EmailUserFormDUI />
      )}
    </div>
  );
}
