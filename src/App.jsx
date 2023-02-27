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
      console.log("click");
    } else {
      changeMode("light");
      document.body.classList.remove("dark");
      localStorage.theme = "light";
      console.log("click");
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
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] dark:text-white  text-zinc-700 py-16 px-8 flex w-screen min-h-screen min-w-[520px]">
      <div className="flex-col w-full">
        <div
          id="db-input-form"
          className=" w-fit rounded-2xl dark:bg-black/25 bg-[#ebebeb] max-w-1/2 mx-auto h-fit relative p-3"
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
          className="text-center mb-5 dark:bg-zinc-900 dark:text-zinc-600 bg-zinc-100 text-zinc-400 h-16 w-[102px] cursor-pointer rounded-l-xl align-middle text-3xl"
        >
          <FaSun className="dark:hidden justify-center m-auto h-full" />
          <BsFillMoonStarsFill className="hidden dark:block m-auto h-full" />
        </div>
        <div className="fixed right-5">
          <InfoBar />
        </div>
      </div>
    </div>
  );
}

export default App;
