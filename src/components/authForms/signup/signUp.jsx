import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignUpFormVanilla from "./signUpFormVanilla.jsx";
import SignUpFormRHF from "./signUpFormRHF.jsx";
import BeachBG from "../../../assets/images/beach.jpeg";
import SignUpFormDUI from "./signUpFormDUI";

export default function SignUp() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full z-10 opacity-40 object-cover absolute"
        src={BeachBG}
      />
      <div className="text-white">
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
