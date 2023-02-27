import.meta.hot;
import { useState, useContext, useEffect } from "react";
import DbForm from "./components/dbForm";
import FormSelectForm from "./components/formSelectForm";
import FunctSelectForm from "./components/functSelectForm";
import { ToastContainer } from "react-toastify";
import InfoBar from "./components/infoBar";
import { useDatabase } from "./hooks/useDatabase";
import { useForm } from "./hooks/useForm";

export function App() {
  const { database } = useDatabase();

  return (
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] py-16 px-8 flex w-screen min-h-screen min-w-[520px]">
      <div className="flex-col w-full">
        <div
          id="db-input-form"
          className=" w-fit rounded-2xl bg-black/25 max-w-1/2 mx-auto h-fit"
        >
          <DbForm />
          <FormSelectForm />
          <ToastContainer />
        </div>
        <FunctSelectForm />
        {/*... */}
      </div>
      <InfoBar />
    </div>
  );
}

export default App;
