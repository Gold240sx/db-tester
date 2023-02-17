import React, { useState, useContext } from "react";
import vanillaCone from "../../assets/icons/vanilla.png";
import reactHookFormLogo from "../../assets/icons/react-hook-form.png";

export default function formSelectForm() {
  const [formSelected, setFormSelected] = useState("");
  //   const database = useDatabase();

  return (
    <div className="">
      <div className="flex flex-col align-middle text-center m-auto p-5 w-fit justify-between">
        <h3 className="text-white font-bold text-2xl">
          Select Form Entry Input Method
        </h3>
        <form className="m-auto flex flex-row gap-4 justify-around w-full mb-4 mt-10">
          <div
            onClick={() => setFormSelected("vanilla")}
            style={
              formSelected === "vanilla" ? { opacity: "1" } : { opacity: "0.5" }
            }
            className={` ${
              formSelected === "vanilla" ? "border" : ""
            } cursor-pointer px-4 py-2 text-orange-200 hover:text-orange-50 hover:bg-white/25 rounded-md bg-white/10 flex hover:shadow-lg`}
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
            onClick={() => setFormSelected("reactHookForm")}
            style={
              formSelected === "reactHookForm"
                ? { opacity: "1" }
                : { opacity: "0.5" }
            }
            className={` ${
              formSelected === "reactHookForm" ? "border" : ""
            } cursor-pointer px-4 py-2 text-pink-200 flex hover:text-pink-50 opacity-50 hover:bg-white/25 rounded-md bg-white/10 hover:shadow-lg`}
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
        </form>
      </div>
      {formSelected && <div>{formSelected}</div>}
    </div>
  );
}
