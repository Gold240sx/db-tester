import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdateAvatarFormVanilla from "./updateAvatarFormVanilla.jsx";
import UpdateAvatarFormRHF from "./updateAvatarFormRHF.jsx";

export default function UpdateAvatar() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "UpdateAvatar" && (
        <UpdateAvatarFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "UpdateAvatar" && <UpdateAvatarFormRHF />}
    </div>
  );
}
