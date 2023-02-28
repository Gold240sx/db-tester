import React from "react";
import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

// if (database === "firebase") {
//   import { useFirebase } from "../../../hooks/useFirebase";
//   import { useAuth } from "../../../hooks/useAuth";
// }

const SignInFormRHF = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();

  return (
    <div className="dark:text-gray-600 font-semibold text-xl mt-5 text-white">
      <h1 className="text-3xl text-center">Sign In</h1>
      <form class="mt-5 p-2 gap-4 flex flex-col w-full">
        <div class="relative">
          <label for=""></label>
          <input
            id="email"
            name="email"
            type="text"
            class="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus-border-rose-600  backdrop-blur-md bg-white/30 rounded-md border-transparent outline-none"
            placeholder="Email Address"
          ></input>
        </div>

        <div class="relative">
          <label for=""></label>
          <input
            id="password"
            name="password"
            type="password"
            class="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus-border-rose-600 backdrop-blur-md bg-white/30 rounded-md border-transparent outline-none"
            placeholder="Password"
          ></input>
        </div>
        <button
          type="button"
          class=" hover:bg-white/80 active:bg-white text-white font-bold py-2 px-4 rounded-lg mt-5 z-10 w-[25%] mx-auto backdrop-blur-md bg-white/30"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInFormRHF;
