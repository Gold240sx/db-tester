import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignInWithEmailLinkFormVanilla from "./signInWithEmailLinkFormVanilla.jsx";
import SignInWithEmailLinkFormRHF from "./signInWithEmailLinkFormRHF.jsx";
import SignInWithEmailLinkFormDUI from "./signInWithEmailLinkFormDUI";

export default function SignInWithEmailLink() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database &&
        form === "vanilla" &&
        authFunction === "SignInWithEmailLink" && (
          <SignInWithEmailLinkFormVanilla />
        )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "SignInWithEmailLink" && (
          <SignInWithEmailLinkFormRHF />
        )}
      {database &&
        form === "daisyUI" &&
        authFunction === "SignInWithEmailLink" && (
          <SignInWithEmailLinkFormDUI />
        )}
    </div>
  );
}
