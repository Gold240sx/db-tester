import React from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

const SignOutRHF = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();

  const handleSignOut = () => {
    console.log(`signOut of ${database}`);
  };

  return (
    <div className="w-100 mt-5">
      <button
        className="bg-white/5 p-2 mx-auto rounded-md flex text-white hover:bg-white/50
        "
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutRHF;
