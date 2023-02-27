import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignOutRHF from "./signOutRHF.jsx";
import SignOutVanilla from "./signOutVanilla.jsx";

export default function SignOut() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

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
