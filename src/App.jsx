import.meta.hot;
import { useState, useContext } from "react";
import DbForm from "./components/forms/dbForm";
import FormSelectForm from "./components/forms/formSelectForm";
import { ToastContainer } from "react-toastify";
import InfoBar from "./components/infoBar";

export function App() {
  return (
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] h-screen p-16 flex">
      <div className=" w-fit rounded-2xl bg-black/25 max-w-1/2">
        <DbForm />
        <FormSelectForm />
        <ToastContainer />
      </div>
      <InfoBar />
    </div>
  );
}

export default App;
