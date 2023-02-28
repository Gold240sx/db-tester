import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignUpFormVanilla from "./signUpFormVanilla.jsx";
import SignUpFormRHF from "./signUpFormRHF.jsx";
import SignUpFormDUI from "./signUpFormDUI";

export default function SignUp() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="relative mt-5 w-full rounded-lg bg-white p-5">
      <div className=" text-white">
        {database && form === "vanilla" && authFunction === "SignUp" && (
          <SignUpFormVanilla />
        )}
        {database && form === "reactHookForm" && authFunction === "SignUp" && (
          <SignUpFormRHF />
        )}
        {database && form === "daisyUI" && authFunction === "SignUp" && (
          <SignUpFormDUI />
        )}
      </div>
    </div>
  );
}
