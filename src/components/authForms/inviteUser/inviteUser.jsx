import { useState } from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";
import InviteUserFormVanilla from "./inviteUserFormVanilla.jsx";
import InviteUserFormRHF from "./inviteUserFormRHF.jsx";
import InviteUserFormDUI from "./inviteUserFormDUI";

export default function InviteUser() {
  const { form, authFunction } = useForm();
  const { database } = useDatabase();

  return (
    <div className="text-white">
      {database && form === "vanilla" && authFunction === "InviteUser" && (
        <InviteUserFormVanilla />
      )}
      {database &&
        form === "reactHookForm" &&
        authFunction === "InviteUser" && <InviteUserFormRHF />}
      {database && form === "daisyUI" && authFunction === "InviteUser" && (
        <InviteUserFormDUI />
      )}
    </div>
  );
}
