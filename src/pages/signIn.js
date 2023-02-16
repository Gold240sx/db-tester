import React from "react";
import { useFormContext } from "./FormContext";
import FirebaseSignIn from "../components/forms/FirebaseSignIn";
import SupabaseSignIn from "../components/forms/SupabaseSignIn";

function SignIn() {
  // Get the form context using the custom hook
  const { formType } = useFormContext();

  return (
    <div>
      {formType === "firebase" && <FirebaseSignIn />}
      {formType === "supabase" && <SupabaseSignIn />}
    </div>
  );
}

export default SignIn;
