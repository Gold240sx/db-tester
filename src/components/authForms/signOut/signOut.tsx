import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignOutRHF from "./signOutRHF";
import SignOutVanilla from "./signOutVanilla";

export default function SignOut() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  const db = false;

  console.log(form);

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "SignOut" && (
        <SignOutVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "SignOut" && (
        <SignOutRHF />
      )}
    </div>
  );
}
