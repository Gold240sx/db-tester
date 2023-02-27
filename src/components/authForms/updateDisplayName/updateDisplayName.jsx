import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdateDisplayNameFormVanilla from "./updateDisplayNameFormVanilla.jsx";
import UpdateDisplayNameFormRHF from "./updateDisplayNameFormRHF.jsx";

export default function UpdateDisplayName() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();
  UpdateDisplayName;
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
    </div>
  );
}
