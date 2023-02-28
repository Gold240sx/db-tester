import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import UpdateAvatarFormVanilla from "./updateAvatarFormVanilla.jsx";
import UpdateAvatarFormRHF from "./updateAvatarFormRHF.jsx";
import UpdateAvatarFormDUI from "./updateAvatarFormDUI";

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
      {database && form === "daisyUI" && authFunction === "UpdateAvatar" && (
        <UpdateAvatarFormDUI />
      )}
    </div>
  );
}
