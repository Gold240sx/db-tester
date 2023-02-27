import React from "react";
import { useDatabase } from "../../../hooks/useDatabase";

const SignOutVanilla = () => {
  const { database } = useDatabase();
  const handleSignOut = () => {
    console.log(`signOut of ${database}`);
  };

  return (
    <div className="w-100 mt-5">
      <button
        className="dark:bg-white/5 p-2 mx-auto rounded-md flex dark:hover:bg-white/50 bg-white/70 text-zinc-500 hover:bg-white hover:shadow-md
        "
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutVanilla;
