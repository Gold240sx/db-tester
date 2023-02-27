import React, { useState, useContext } from "react";
import vanillaCone from "../assets/icons/vanilla.png";
import reactHookFormLogo from "../assets/icons/react-hook-form.png";
import { useForm } from "../hooks/useForm";
import { useDatabase } from "../hooks/useDatabase";

export default function formSelectForm() {
  const [formSelected, setFormSelected] = useState("");
  const { form, changeForm, validation, changeValidation } = useForm(); //validation

  //   console.log("form.validation", form.validation);
  console.log("validation", validation);

  const toggleValidation = (value) => {
    changeValidation(value ? false : true);
  };

  return (
    <div className="">
      <div className="flex flex-col align-middle text-center m-auto p-5 w-fit justify-between">
        <h3 className="text-gray-600 font-bold text-2xl">
          Select Form Entry Input Method
        </h3>
        <form className="m-auto flex flex-col gap-4 justify-around w-full mb-4 mt-10">
          <div className="flex flex-row gap-4 justify-center -mt-4">
            <div
              onClick={() => changeForm("vanilla")}
              style={form === "vanilla" ? { opacity: "1" } : { opacity: "0.5" }}
              className={` ${
                form === "vanilla" ? "border" : ""
              } cursor-pointer px-4 py-2 text-orange-200 hover:text-orange-50 hover:bg-white/25 rounded-full bg-white/10 flex hover:shadow-lg`}
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
              style={
                form === "reactHookForm" ? { opacity: "1" } : { opacity: "0.5" }
              }
              className={` ${
                form === "reactHookForm" ? "border" : ""
              } cursor-pointer px-4 py-2 text-pink-200 flex hover:text-pink-50 opacity-50 hover:bg-white/25 rounded-full bg-white/10 hover:shadow-lg`}
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
          </div>
          {/* validation Select */}
          <div className="flex text-white mx-auto">
            <h3 className="my-auto">Validation?</h3>
            <input
              type="checkbox"
              className="mx-auto bg-[#373736] border-transparent rounded-sm ml-2 my-auto cursor-pointer"
              checked={validation ? true : false}
              onChange={() => toggleValidation(validation)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
