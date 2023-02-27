import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdatePasswordFormVanilla from "./updatePasswordFormVanilla.jsx";
import UpdatePasswordFormRHF from "./updatePasswordFormRHF.jsx";

export default function UpdatePassword() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "UpdatePassword" && (
        <UpdatePasswordFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "UpdatePassword" && <UpdatePasswordFormRHF />}
    </div>
  );
}
