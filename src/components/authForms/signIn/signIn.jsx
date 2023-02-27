import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import SignInFormVanilla from "./signInFormVanilla.jsx";
import SignInFormRHF from "./signInFormRHF.tsx";
import SignUpFormVanilla from "./signInFormVanilla.jsx";
import SignUpFormRHF from "./signInFormRHF.tsx";
import BeachBG from "../../../assets/images/beach.jpeg";

export default function SignIn(AuthFunct) {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full object-cover absolute pointer-events-none z-0"
        src={BeachBG}
      />
      <div className="text-white">
        {database && form === "vanilla" && authFunction === "SignIn" && (
          <SignInFormVanilla />
        )}
        {database && form === "reactHookForm" && authFunction === "SignIn" && (
          <SignInFormRHF />
        )}
      </div>
    </div>
  );
}
