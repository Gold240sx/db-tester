import React from "react";

const FirebaseSignInForm = () => {
  return (
    <div>
      <form className="flex flex-col text-white">
        <div className="flex my-3">
          {/* Buttons to define the operation desired to be performed */}
          <label className="cursor-pointer flex">
            <input
              type="radio"
              name="operation"
              id="signInRadio"
              className="hidden"
            />
            <p className="whitespace-nowrap mx-2">Sign In</p>
            <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-opacity-0 bg-blue-500 rounded-full">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            </span>
          </label>
          <label className="cursor-pointer flex">
            <input
              type="radio"
              name="operation"
              id="signUpRadio"
              className="hidden"
            />
            <p className="whitespace-nowrap mx-2">SignUp</p>
            <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-opacity-0 bg-blue-500 rounded-full">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            </span>
          </label>
          <label className="cursor-pointer flex">
            <input
              type="radio"
              name="operation"
              id="signOutRadio"
              className="hidden"
            />
            <p className="whitespace-nowrap mx-2">Sign Out</p>
            <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-opacity-0 bg-blue-500 rounded-full">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            </span>
          </label>
          <label className="cursor-pointer flex">
            <input
              type="radio"
              name="operation"
              id="deleteAccountRadio"
              className="hidden"
            />
            <p className="whitespace-nowrap mx-2">Delete Account</p>
            <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-opacity-0 bg-blue-500 rounded-full">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            </span>
          </label>
        </div>
        <label className="cursor-pointer flex">
          <input
            type="radio"
            name="operation"
            id="resetPasswordRadio"
            className="hidden"
          />
          <p className="whitespace-nowrap mx-2">Reset Password</p>
          <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-opacity-0 bg-blue-500 rounded-full">
            <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
          </span>
        </label>

        <label htmlFor="email" className="mt-3 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#373736] border-transparent rounded mb-2"
        />
        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          autoComplete="false"
          id="password"
          className="bg-[#373736] border-transparent rounded mb-2"
        />
        <button
          type="submit"
          className="bg-lime-600 rounded-md  w-fit py-2 px-5 mx-auto mt-2 hover:bg-lime-500"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default FirebaseSignInForm;
