import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import VerifyEmailFormVanilla from "./verifyEmailFormVanilla.jsx";
import VerifyEmailFormRHF from "./verifyEmailFormRHF.jsx";

export default function VerifyEmail() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "VerifyEmail" && (
        <VerifyEmailFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "VerifyEmail" && <VerifyEmailFormRHF />}
    </div>
  );
}
