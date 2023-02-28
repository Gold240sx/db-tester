import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdateEmailFormVanilla from "./updateEmailFormVanilla.jsx";
import UpdateEmailFormRHF from "./updateEmailFormRHF.jsx";
import UpdateEmailFormDUI from "./updateEmailFormDUI";

export default function UpdateEmail() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "UpdateEmail" && (
        <UpdateEmailFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "UpdateEmail" && <UpdateEmailFormRHF />}
      {database && form === "daisyUI" && authFunction === "UpdateEmail" && (
        <UpdateEmailFormDUI />
      )}
    </div>
  );
}
