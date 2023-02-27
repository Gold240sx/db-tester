import React from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

const DowngradeUserFormRHF = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();

  return (
    <div className="text-gray-600 font-semibold text-xl mt-5">
      {database} {form} {authFunction} Form{" "}
      {validation ? "with Validation" : "without Validation"}
    </div>
  );
};

export default DowngradeUserFormRHF;
