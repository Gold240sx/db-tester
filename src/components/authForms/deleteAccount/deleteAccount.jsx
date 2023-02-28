import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import DeleteAccountFormVanilla from "./deleteAccountFormVanilla.jsx";
import DeleteAccountFormRHF from "./deleteAccountFormRHF.jsx";
import DeleteAccountFormDUI from "./deleteAccountFormDUI";

export default function DeleteAccount() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "DeleteAccount" && (
        <DeleteAccountFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "DeleteAccount" && <DeleteAccountFormRHF />}
      {database && form === "daisyUI" && authFunction === "DeleteAccount" && (
        <DeleteAccountFormDUI />
      )}
    </div>
  );
}
