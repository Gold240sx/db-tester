import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import DeleteUserFormVanilla from "./deleteUserFormVanilla.jsx";
import DeleteUserFormRHF from "./deleteUserFormRHF.jsx";

export default function DeleteUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "DeleteUser" && (
        <DeleteUserFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "DeleteUser" && <DeleteUserFormRHF />}
    </div>
  );
}