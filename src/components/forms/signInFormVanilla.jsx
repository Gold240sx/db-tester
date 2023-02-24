import React from "react";
import { useDatabase } from "../../hooks/useDatabase";
import { useForm } from "../../hooks/useForm";

const signInFormVanilla = (AuthFunct) => {
  const AuthFunc = AuthFunct;
  const { database } = useDatabase();
  const { form } = useForm();
  return (
    <div className="text-gray-600 font-semibold text-xl mt-5">
      {database} {form} SignInForm
    </div>
  );
};

export default signInFormVanilla;
