import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import CreateUserFormVanilla from "./createUserFormVanilla.jsx";
import CreateUserFormRHF from "./createUserFormRHF.jsx";

export default function CreateUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "CreateUser" && (
        <CreateUserFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "CreateUser" && <CreateUserFormRHF />}
    </div>
  );
}
