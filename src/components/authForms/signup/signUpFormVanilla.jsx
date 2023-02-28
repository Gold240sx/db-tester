import React, { useState } from "react";
// import { FirebaseContext, reactFireContext, SupabaseContext } from "./context";
// import FirebaseSignupForm from "./FirebaseSignupForm";
// import reactFireSignupForm from "./reactFireSignupForm";
// import SupabaseSignupForm from "./SupabaseSignupForm";

import { useDatabase } from "../../../hooks/useDatabase";
import { useForm } from "../../../hooks/useForm";

const SignUpFormVanilla = () => {
  const { database } = useDatabase();
  const { form, authFunction, validation } = useForm();
  const [functionSelected, setFunctionSelected] = useState();

  const handleSignIn = () => {
    console.log("Sign Up with Google");
  };

  return (
    <div className=" text-gray-600 dark:text-gray-600">
      <h1 className="mb-4 text-center text-3xl font-semibold">
        Create an account!
      </h1>
      <form className="relative flex flex-col gap-3">
        <section>
          <h2 className=" ml-5 text-gray-400">...Select a login provider:</h2>
          <div
            id="alt-login-options"
            className=" mt-4 mb-4 grid grid-cols-2 gap-2"
          >
            <button
              type="button"
              className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
              onClick={handleSignIn}
            >
              <svg
                className="mr-2 -ml-1 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
            <button
              type="button"
              className="mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#24292F] px-5  py-2.5  text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
              onClick={handleSignIn}
            >
              <svg
                className="mr-2 -ml-1 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              Sign in with Github
            </button>
            <button
              type="button"
              className="dark:focus:ring-[#3b5998]/55 mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#3b5998] px-5  py-2.5  text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
              onClick={handleSignIn}
            >
              <svg
                className="mr-2 -ml-1 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                ></path>
              </svg>
              Sign in with Facebook
            </button>
            <button
              type="button"
              className="mr-2 mb-2 inline-flex items-center rounded-lg bg-[#050708] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50"
            >
              <svg
                class="mr-2 -ml-1 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              Sign in with Apple
            </button>
          </div>
        </section>
        <hr />
        <section>
          <h2 className=" ml-5 text-gray-400">
            ...Or Create a username and password:
          </h2>
          <div className="m-4 flex flex-col">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg border border-gray-300 font-normal focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>{" "}
          <div className="m-4 flex flex-col">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg border border-gray-300 font-normal focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            className="mx-auto my-2 flex rounded-lg bg-green-500 py-1 px-3 text-white"
            type="submit"
          >
            Create Account!
          </button>
        </section>
      </form>
    </div>
  );
};

export default SignUpFormVanilla;
