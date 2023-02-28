import React from "react";
// import { FirebaseContext, reactFireContext, SupabaseContext } from "./context";
// import FirebaseSignupForm from "./FirebaseSignupForm";
// import reactFireSignupForm from "./reactFireSignupForm";
// import SupabaseSignupForm from "./SupabaseSignupForm";

import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

const SignUpFormVanilla = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();

  //   const SignupForm = {
  //     Firebase: FirebaseSignupForm,
  //     ReactFire: reactFireSignupForm,
  //     Supabase: SupabaseSignupForm,
  //   }[database];

  return (
    <div className="text-gray-600 font-semibold text-xl mt-5">
      {database} {form} {authFunction} Form{" "}
      {validation ? "with Validation" : "without Validation"}
      <div>{SignupForm && <SignupForm />}</div>
    </div>
  );
};

export default SignUpFormVanilla;
