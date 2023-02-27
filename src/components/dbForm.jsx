import React, { useState, useContext, createContext, useEffect } from "react";
import firebaseLogo from "../assets/icons/firebase.png";
import supabaseLogo from "../assets/icons/supabase.png";
import reactFireLogo from "../assets/icons/react-fire.png";
import pocketbaseLogo from "../assets/icons/pocketbase.png";
import { useDatabase } from "../hooks/useDatabase";
import { useTheme } from "../hooks/useTheme";

export default function DbForm() {
  const { database, changeDb } = useDatabase();
  const { mode } = useTheme();

  return (
    <div className="">
      <div className="flex flex-col align-middle text-center m-auto p-5 w-fit justify-between max-w-[530px]">
        <h2 className="dark:text-gray-600 text-gray-300 font-bold text-4xl">
          Select database
        </h2>
        <form className="m-auto flex flex-row gap-4 justify-around w-full mb-4 mt-10">
          <div className="flex flex-col">
            <div className="flex-row flex gap-4 mb-4 -mt-4">
              {" "}
              <div
                onClick={() => changeDb("Firebase")}
                style={
                  database === "Firebase" && mode === "dark"
                    ? { opacity: "1" }
                    : mode === "dark"
                    ? { opacity: "0.5" }
                    : null
                }
                className={` ${
                  database === "Firebase"
                    ? " border-zinc-300 border-2 dark:border-transparent"
                    : ""
                } cursor-pointer px-4 py-2 dark:text-orange-400 dark:hover:text-orange-300  dark:opacity-50 dark:bg-white/10 dark:hover:bg-white/25 rounded-md flex hover:bg-white hover:shadow-lg bg-white text-orange-600 hover:text-orange-500 border-2 border-transparent`}
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
                  database === "Supabase"
                    ? { opacity: "1" }
                    : mode === "dark"
                    ? { opacity: "0.5" }
                    : null
                }
                className={` ${
                  database === "Supabase"
                    ? " border-zinc-300 border-2 dark:border-transparent"
                    : ""
                } cursor-pointer px-4 py-2 dark:text-lime-300 flex dark:hover:text-lime-200 dark:opacity-50 dark:hover:bg-white/25 dark:bg-white/10 hover:bg-white rounded-md hover:shadow-lg bg-white border-2 border-transparent text-lime-600 hover:text-lime-500 `}
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
                  database === "ReactFire"
                    ? { opacity: "1" }
                    : mode === "dark"
                    ? { opacity: "0.5" }
                    : null
                }
                className={` ${
                  database === "ReactFire"
                    ? " border-zinc-300 border-2 dark:border-transparent"
                    : ""
                } cursor-pointer px-4 py-2 flex text-yellow-500 hover:text-yellow-300 dark:opacity-50 dark:hover:bg-white/25 dark:bg-white/10 hover:bg-white rounded-md hover:shadow-lg bg-white border-2 border-transparent`}
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
            </div>
            <div className="flex-row flex">
              {" "}
              <div
                onClick={() => changeDb("Pocketbase")}
                style={
                  database === "Pocketbase"
                    ? { opacity: "1" }
                    : mode === "dark"
                    ? { opacity: "0.5" }
                    : null
                }
                className={` ${
                  database === "Pocketbase"
                    ? " border-zinc-300 border-2 dark:border-transparent"
                    : ""
                } cursor-pointer px-4 py-2 dark:text-white dark:opacity-50 rounded-md flex hover:shadow-lg dark:bg-white/10  hover:bg-white text-zinc-500 bg-white border-2 border-transparent hover:text-zinc-700`}
              >
                <img className=" h-8 pr-2" src={pocketbaseLogo} />
                <input
                  type="radio"
                  name="database"
                  value="pocketbase"
                  className="text-pink-400 font-semibold hidden cursor-pointer"
                />
                <label className="font-semibold cursor-pointer my-auto">
                  Pocketbase
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
