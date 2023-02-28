import React, { useState, useContext } from "react";
import vanillaCone from "../assets/icons/vanilla.png";
import reactHookFormLogo from "../assets/icons/react-hook-form.png";
import { useForm } from "../hooks/useForm";
import { useDatabase } from "../hooks/useDatabase";
import daisyUiLogo from "../assets/icons/daisyui.png";

export default function formSelectForm() {
  const [formSelected, setFormSelected] = useState("");
  const { form, changeForm, validation, changeValidation } = useForm(); //validation

  //   console.log("form.validation", form.validation);
  //   console.log("validation", validation);

  const toggleValidation = (value) => {
    changeValidation(value ? false : true);
  };

  return (
    <div className="">
      <div className="flex flex-col align-middle text-center m-auto p-5 w-fit justify-between">
        <h3 className="dark:text-gray-600 text-slate-300 font-bold text-2xl">
          Select Form Entry Input Method
        </h3>
        <form className="m-auto flex flex-col gap-4 justify-around w-full mb-4 mt-10">
          <div className="flex flex-row gap-4 justify-center -mt-4">
            <div
              onClick={() => changeForm("vanilla")}
              style={form === "vanilla" ? { opacity: "1" } : null}
              className={` ${
                form === "vanilla"
                  ? "border-zinc-300 dark:border-transparent text-[#cea373] opacity-100"
                  : "text-[#e1c3a1]"
              } cursor-pointer px-4 py-2 dark:text-orange-200 dark:hover:text-orange-50  dark:hover:bg-white/25 hover:text-[#cea373] hover:bg-white rounded-full dark:bg-white/10 flex hover:shadow-lg dark:opacity-50 bg-white border-2 border-transparent`}
            >
              <img className=" h-8 pr-2" src={vanillaCone} />
              <input
                type="radio"
                name="database"
                value="vanilla"
                className="text-pink-400 font-semibold hidden cursor-pointer"
              />
              <label className="font-semibold cursor-pointer my-auto">
                Vanilla
              </label>
            </div>

            <div
              onClick={() => changeForm("reactHookForm")}
              style={form === "reactHookForm" ? { opacity: "1" } : null}
              className={` ${
                form === "reactHookForm"
                  ? "border-zinc-300 dark:border-transparent text-pink-500"
                  : ""
              } cursor-pointer px-4 py-2 dark:text-pink-200 flex dark:hover:text-pink-50 dark:opacity-50 dark:hover:bg-white/25 rounded-full dark:bg-white/10 bg-white hover:shadow-lg hover:bg-white text-pink-300 hover:text-pink-500  border-2 border-transparent`}
            >
              <img className=" h-8 pr-2" src={reactHookFormLogo} />
              <input
                type="radio"
                name="database"
                value="reactHookForm"
                className="text-pink-400 font-semibold hidden cursor-pointer"
              />
              <label className=" font-semibold cursor-pointer my-auto">
                React Hook Form
              </label>
            </div>

            <div
              onClick={() => changeForm("daisyUI")}
              style={form === "daisyUI" ? { opacity: "1" } : null}
              className={` ${
                form === "daisyUI"
                  ? "border-zinc-300 dark:border-transparent text-purple-600 dark:text-purple-300"
                  : ""
              } cursor-pointer px-4 py-2 dark:text-purple-400 flex dark:hover:text-purple-300 dark:opacity-50 dark:hover:bg-white/25 rounded-full dark:bg-white/10 bg-white hover:shadow-lg hover:bg-white text-purple-400 hover:text-purple-600  border-2 border-transparent`}
            >
              <img className=" h-8 pr-2" src={daisyUiLogo} />
              <input
                type="radio"
                name="database"
                value="daisyUI"
                className="text-purple-800 font-semibold hidden cursor-pointer"
              />
              <label className=" font-semibold cursor-pointer my-auto">
                DaisyUI
              </label>
            </div>
          </div>
          {/* validation Select */}
          <div className="flex mx-auto">
            <h3 className="my-auto text-zinc-400">Validation?</h3>
            <input
              type="checkbox"
              className="mx-auto dark:bg-[#373736] border-transparent rounded-sm ml-2 my-auto cursor-pointer"
              checked={validation ? true : false}
              onChange={() => toggleValidation(validation)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
