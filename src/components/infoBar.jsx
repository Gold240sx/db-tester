import React, { useState, useContext } from "react";
import firebaseLogo from "../assets/icons/firebase.png";
import supabaseLogo from "../assets/icons/supabase.png";
import reactFireLogo from "../assets/icons/react-fire.png";
import vanillaLogo from "../assets/icons/vanilla.png";
// import reactHookFormLogo from "../../assets/icons/react-hook-form.png";

export default function InfoBar() {
  const [minimized, setMinimized] = useState(false);
  const formSelected = "vanilla";
  const database = "Firebase";

  return (
    <div className=" absolute top-4 right-2 min-w-fit w-30 p-5 flex-col bg-black rounded-2xl h-[90%] min-h-[448px]">
      <div
        className="rounded-full border text-white h-6 w-6 ml-auto mb-8 cursor-pointer hover:bg-white/25"
        onClick={() => {
          setMinimized(!minimized);
        }}
      >
        {!minimized ? <p className="w-6 text-center">-</p> : null}
        {minimized ? <p className="w-6 text-center">+</p> : null}
      </div>

      {minimized && (
        <p className="text-white/40 text-3xl -rotate-90 absolute -right-[52px] whitespace-nowrap top-40">
          Project Info
        </p>
      )}
      {!minimized && (
        <div className="flex my-3">
          <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto">
            Form:
          </h2>
          {formSelected === "vanilla" ? (
            <img className="h-8" src={vanillaLogo} />
          ) : formSelected === "reactHookForm" ? (
            <img className="h-8" src={reactHookFormLogo} />
          ) : null}
        </div>
      )}
      {!minimized && (
        <div className="flex my-3">
          {database && (
            <div className="flex flex-row ">
              <h2 className="my-auto mr-2 text-white font-semibold ml-auto">
                Database:
              </h2>
              {database === "Firebase" ? (
                <img className="h-8" src={firebaseLogo} />
              ) : database === "Supabase" ? (
                <img className="h-8" src={supabaseLogo} />
              ) : database === "ReactFire" ? (
                <img className="h-8" src={reactFireLogo} />
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
