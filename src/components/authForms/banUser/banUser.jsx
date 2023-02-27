import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import BanUserFormVanilla from "./banUserFormVanilla.jsx";
import BanUserFormRHF from "./banUserFormRHF.jsx";

export default function BanUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();
  const formVal = form;

  const db = false;

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "BanUser" && (
        <BanUserFormVanilla />
      )}
      {database && form === "reactHookForm" && authFunction === "BanUser" && (
        <BanUserFormRHF />
      )}
    </div>
  );
}
