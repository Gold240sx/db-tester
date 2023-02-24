import { useState } from "react";
import { useDatabase } from "../../hooks/useDatabase";
import { useForm } from "../../hooks/useForm";
import SignInFormVanilla from "./signInFormVanilla.jsx";
import SignInFormRHF from "./signInFormRHF.tsx";

export default function SignIn(AuthFunct) {
  const { form } = useForm();
  const { database } = useDatabase();
  const formVal = form;

  const db = false;

  console.log(form);

  return (
    <div className="text-white">
      {database && form === "vanilla" && (
        <SignInFormVanilla AuthFunct={AuthFunct} />
      )}
      {database && form === "reactHookForm" && (
        <SignInFormRHF AuthFunct={AuthFunct} />
      )}
    </div>
  );
}
