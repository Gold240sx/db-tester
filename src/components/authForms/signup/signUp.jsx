import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignUpFormVanilla from "./signUpFormVanilla.jsx";
import SignUpFormRHF from "./signUpFormRHF.jsx";

export default function SignUp() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "SignUp" && (
        <SignUpFormVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "SignUp" && (
        <SignUpFormRHF />
      )}
    </div>
  );
}
