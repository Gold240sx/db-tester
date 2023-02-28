import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdateDisplayNameFormVanilla from "./updateDisplayNameFormVanilla.jsx";
import UpdateDisplayNameFormRHF from "./updateDisplayNameFormRHF.jsx";
import UpdateDisplayNameFormDUI from "./updateDisplayNameFormDUI";

export default function UpdateDisplayName() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database &&
        form === "vanilla" &&
        authFunction === "UpdateDisplayName" && (
          <UpdateDisplayNameFormVanilla />
        )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "UpdateDisplayName" && <UpdateDisplayNameFormRHF />}
      {database &&
        form === "daisyUI" &&
        authFunction === "UpdateDisplayName" && <UpdateDisplayNameFormDUI />}
    </div>
  );
}
