import React, { useState, useContext, createContext, useEffect } from "react";
import firebaseLogo from "../../assets/icons/firebase.png";
import supabaseLogo from "../../assets/icons/supabase.png";
import reactFireLogo from "../../assets/icons/react-fire.png";
import { useDatabase } from "../../hooks/useDatabase";

export default function DbForm() {
  //   const { database, setDb } = useDatabase();
  const { database, changeDb } = useDatabase();

  //   useEffect(() => {
  //     database = db;
  //     return;
  //   }, [database]);

  return (
    <div className="">
      <div className="flex flex-col align-middle text-center m-auto p-5 w-fit justify-between">
        <h2 className="text-gray-600 font-bold text-4xl">Select database</h2>
        <form className="m-auto flex flex-row gap-4 justify-around w-full mb-4 mt-10">
          <div
            onClick={() => changeDb("Firebase")}
            style={
              database === "Firebase" ? { opacity: "1" } : { opacity: "0.5" }
            }
            className={` ${
              database === "Firebase" ? "border" : ""
            } cursor-pointer px-4 py-2 text-orange-400 hover:text-orange-300  opacity-50 hover:bg-white/25 rounded-md bg-white/10 flex hover:shadow-lg`}
          >
            <img className=" h-8 pr-2" src={firebaseLogo} />
            <input
              type="radio"
              name="database"
              value="firebase"
              className="text-pink-400 font-semibold hidden cursor-pointer"
            />
            <label className="font-semibold cursor-pointer my-auto">
              Firebase
            </label>
          </div>

          <div
            onClick={() => changeDb("Supabase")}
            style={
              database === "Supabase" ? { opacity: "1" } : { opacity: "0.5" }
            }
            className={` ${
              database === "Supabase" ? "border" : ""
            } cursor-pointer px-4 py-2 text-lime-300 flex hover:text-lime-200 opacity-50 hover:bg-white/25 rounded-md bg-white/10 hover:shadow-lg`}
          >
            <img className=" h-8 pr-2" src={supabaseLogo} />
            <input
              type="radio"
              name="database"
              value="supabase"
              className="text-pink-400 font-semibold hidden cursor-pointer"
            />
            <label className=" font-semibold cursor-pointer my-auto">
              Supabase
            </label>
          </div>

          <div
            onClick={() => changeDb("ReactFire")}
            style={
              database === "ReactFire" ? { opacity: "1" } : { opacity: "0.5" }
            }
            className={` ${
              database === "ReactFire" ? "border" : ""
            } cursor-pointer px-4 py-2 flex text-yellow-500 hover:text-yellow-300 opacity-50 hover:bg-white/25 rounded-md bg-white/10 hover:shadow-lg`}
          >
            <img className=" h-8 pr-2" src={reactFireLogo} />
            <input
              type="radio"
              name="database"
              value="reactFire"
              className="text-pink-400 font-semibold hidden cursor-pointer"
            />
            <label className=" font-semibold cursor-pointer my-auto">
              React Fire
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
