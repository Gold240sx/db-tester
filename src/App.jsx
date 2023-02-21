import.meta.hot;
import { useState, useContext } from "react";
import DbForm from "./components/forms/dbForm";
import SignInForm from "./components/forms/signInForm";
import FormSelectForm from "./components/forms/formSelectForm";
import { ToastContainer } from "react-toastify";
import InfoBar from "./components/infoBar";
import { useDatabase } from "./hooks/useDatabase";

export function App() {
  const { database } = useDatabase();

  return (
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] py-16 px-8 flex w-screen min-h-screen">
      <div className="flex-col w-full">
        <div
          id="db-input-form"
          className=" w-fit rounded-2xl bg-black/25 max-w-1/2 mx-auto h-fit"
        >
          <DbForm />
          <FormSelectForm />
          <ToastContainer />
        </div>
        <div className="rounded-2xl bg-black/25 max-w-1/2 mx-auto h-fit px-8 py-4 mt-10 w-[510px]">
          <h1 className="text-gray-600 font-bold text-4xl text-center">
            Auth Functions...
          </h1>
          {database === "Firebase" && <SignInForm />}
        </div>
      </div>
      <InfoBar />
    </div>
  );
}

export default App;
