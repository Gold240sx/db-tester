import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import BanUserFormVanilla from "./banUserFormVanilla.jsx";
import BanUserFormRHF from "./banUserFormRHF.jsx";
import BanUserFormDUI from "./banUserFormDUI";

export default function BanUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "BanUser" && (
        <BanUserFormVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "BanUser" && (
        <BanUserFormRHF />
      )}
      {database && form === "daisyUI" && authFunction === "BanUser" && (
        <BanUserFormDUI />
      )}
    </div>
  );
}
