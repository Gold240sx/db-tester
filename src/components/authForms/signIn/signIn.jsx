import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignInFormVanilla from "./signInFormVanilla.jsx";
import SignInFormRHF from "./signInFormRHF.tsx";
import SignUpFormVanilla from "./signInFormVanilla.jsx";
import SignUpFormRHF from "./signInFormRHF.tsx";

export default function SignIn(AuthFunct) {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "SignIn" && (
        <SignInFormVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "SignIn" && (
        <SignInFormRHF />
      )}
    </div>
  );
}
