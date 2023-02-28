import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import DowngradeUserFormVanilla from "./downgradeUserFormVanilla.jsx";
import DowngradeUserFormRHF from "./downgradeUserFormRHF.jsx";
import DowngradeUserFormDUI from "./downgradeUserFormDUI";

export default function DowngradeUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "DowngradeUser" && (
        <DowngradeUserFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "DowngradeUser" && <DowngradeUserFormRHF />}
      {database && form === "daisyUI" && authFunction === "DowngradeUser" && (
        <DowngradeUserFormDUI />
      )}
    </div>
  );
}
