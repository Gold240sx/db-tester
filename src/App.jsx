import.meta.hot;
import { useState, useContext, useEffect } from "react";
import DbForm from "./components/dbForm";
import FormSelectForm from "./components/formSelectForm";
import FunctSelectForm from "./components/functSelectForm";
import { ToastContainer } from "react-toastify";
import InfoBar from "./components/infoBar";
import { useDatabase } from "./hooks/useDatabase";
import { useForm } from "./hooks/useForm";
import { useTheme } from "./hooks/useTheme";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

export function App() {
  const { database } = useDatabase();
  const { mode, changeMode } = useTheme();

  const darkModeToggle = () => {
    if (mode === "light") {
      changeMode("dark");
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      changeMode("light");
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.body.classList.add("dark");
      changeMode("dark");
    } else {
      document.body.classList.remove("dark");
      changeMode("light");
    }
  }, []);

  return (
    <div className="flex min-h-screen w-screen  min-w-[520px] bg-[#dbdbdb] py-16 px-8 text-zinc-700 dark:bg-[#2b2b2a] dark:text-white">
      <div className="w-full flex-col">
        <div
          id="db-input-form"
          className=" max-w-1/2 relative mx-auto h-fit w-fit rounded-2xl bg-[#ebebeb] p-3 dark:bg-black/25"
        >
          <DbForm />
          <FormSelectForm />
          <ToastContainer />
        </div>
        <FunctSelectForm />
        {/*... */}
      </div>
      <div className="fixed right-0">
        <div
          onClick={() => darkModeToggle()}
          className="mb-5 h-16 w-[102px] cursor-pointer rounded-l-xl bg-zinc-100 text-center align-middle text-3xl text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600"
        >
          <FaSun className="m-auto h-full justify-center dark:hidden" />
          <BsFillMoonStarsFill className="m-auto hidden h-full dark:block" />
        </div>
        <div
          className="fixed right-5 overflow-hidden rounded-xl"
          style={{
            maxHeight: "calc(100vh - 10.25rem - 25px)",
            minHeight: "calc(100vh - 10.25rem - 25px)",
            bottom: "25px",
          }}
        >
          <InfoBar className="relative" style={{}} />
        </div>
      </div>
    </div>
  );
}

export default App;
