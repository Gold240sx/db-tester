import React from "react";
import { useDatabase } from "../../hooks/useDatabase";
import { useForm } from "../../hooks/useForm";

const signInFormRHF = (AuthFunct) => {
  const { database } = useDatabase();
  const { form } = useForm();
  const { validate } = useForm();

  return (
    <div className="text-gray-600 font-semibold text-xl mt-5">
      {database} {form}Form
    </div>
  );
};

export default signInFormRHF;
