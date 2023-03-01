import React from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

const SignUpFormDUI = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();

  return (
    <div className="mt-5 text-xl font-semibold text-gray-600">
      {database} {form} {authFunction} Form{" "}
      {validation ? "with Validation" : "without Validation"}
    </div>
  );
};

export default SignUpFormDUI;
