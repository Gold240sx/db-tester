import React, { useState, useContext } from "react";
import firebaseLogo from "../assets/icons/firebase.png";
import supabaseLogo from "../assets/icons/supabase.png";
import reactFireLogo from "../assets/icons/react-fire.png";
import pocketbaseLogo from "../assets/icons/pocketbase.png";
import vanillaLogo from "../assets/icons/vanilla.png";
import reactHookFormLogo from "../assets/icons/react-hook-form.png";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";
import { useForm } from "../hooks/useForm";
import { DbContext, DbProvider } from "../context/DbContext";

export default function InfoBar() {
  const [minimized, setMinimized] = useState(true);
  const { database } = useDatabase();
  const {
    username,
    displayname,
    email,
    avatar,
    AvatarDefault,
    firstName,
    lastName,
    role,
    address,
  } = useUser();
  const { form } = useForm();

  return (
    <div className="min-w-fit w-30 p-5 flex-col bg-black rounded-2xl h-fit min-h-[448px]">
      {/* fixed ^^ later */}
      <div
        className={` ${
          minimized ? "mx-auto" : "ml-auto"
        } rounded-full border text-white h-6 w-6 mb-8 cursor-pointer hover:bg-white/25`}
        onClick={() => {
          setMinimized(!minimized);
        }}
      >
        {!minimized ? <p className="w-6 text-center">-</p> : null}
        {minimized ? <p className="w-6 text-center">+</p> : null}
      </div>

      {!minimized && (
        <div className="flex my-3">
          <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto">
            Form:
          </h2>
          {form === "vanilla" ? (
            <img className="h-8" src={vanillaLogo} />
          ) : form === "reactHookForm" ? (
            <img className="h-8" src={reactHookFormLogo} />
          ) : null}
        </div>
      )}
      {!minimized && (
        <div className="flex my-3">
          {database && (
            <div className="flex flex-row ml-auto">
              <h2 className="my-auto mr-2 text-white font-semibold ml-auto">
                Database:
              </h2>
              {database === "Firebase" ? (
                <img className="h-8" src={firebaseLogo} />
              ) : database === "Supabase" ? (
                <img className="h-8" src={supabaseLogo} />
              ) : database === "ReactFire" ? (
                <img className="h-8" src={reactFireLogo} />
              ) : database === "Pocketbase" ? (
                <img className="h-8" src={pocketbaseLogo} />
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* minimized preview */}
      {minimized && (
        <div className="flex my-3 flex-col w-10">
          <p className="text-white/40 text-3xl -rotate-90 whitespace-nowrap  mt-36">
            Project Info
          </p>
          {form === "vanilla" ? (
            <img className="h-10 mx-auto w-100 mt-10" src={vanillaLogo} />
          ) : form === "reactHookForm" ? (
            <img className="h-10 mx-auto w-100 mt-10" src={reactHookFormLogo} />
          ) : null}
        </div>
      )}
      {minimized && (
        <div className="flex my-3">
          {database === "Firebase" ? (
            <img className="h-8 mx-auto " src={firebaseLogo} />
          ) : database === "Supabase" ? (
            <img className="h-8 mx-auto" s src={supabaseLogo} />
          ) : database === "ReactFire" ? (
            <img className="h-8 mx-auto " src={reactFireLogo} />
          ) : database === "Pocketbase" ? (
            <img className="h-8 mx-auto " src={pocketbaseLogo} />
          ) : null}
        </div>
      )}
      {minimized && (
        <div
          style={{ maxWidth: "2.6rem" }}
          className="overflow-hidden flex mx-auto"
        >
          {avatar ? (
            <img
              src={avatar}
              className="rounded-full h-10 object-cover mx-auto"
            />
          ) : (
            <img src={AvatarDefault} className="rounded-full w-14 mx-auto" />
          )}
        </div>
      )}

      {/* minimized preview end */}

      {!minimized && (
        // User  info
        <div id="info-bar-user-Info  mt-3">
          <h1 className="my-auto text-xl font-semibold text-right ml-auto underline text-gray-400">
            User Info
          </h1>

          {/* Avatar*/}
          <div className="flex mt-2">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-auto">
              Avatar:
            </h2>
            <div style={{ maxWidth: "2.6rem" }} className="overflow-hidden">
              {avatar ? (
                <img src={avatar} className="rounded-full h-10 object-cover" />
              ) : (
                <img src={AvatarDefault} className="rounded-full w-14" />
              )}
            </div>
          </div>

          {/* Username */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              Username:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {username ? username : "undefined"}
            </p>
          </div>

          {/* Displayname */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              Display Name:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {displayname ? displayname : "undefined"}
            </p>
          </div>

          {/* Email */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              Email:
            </h2>
            <p className="text-gray-400 mt-auto lowercase">
              {email ? email : "undefined"}
            </p>
          </div>

          {/*Address */}
          <div className="flex mt-2">
            <h2 className="mr-2 text-white font-semibold text-right ml-auto">
              Address:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {address ? address.ln1 : "undefined"} <br />
              {address ? `${address.city}, ` : null}
              {address ? `${address.state} ` : null}
              {address ? address.zip : null}
            </p>
          </div>

          {/* First Name */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              First Name:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {firstName ? firstName : "undefined"}
            </p>
          </div>

          {/* Last Name */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              Last Name:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {lastName ? lastName : "undefined"}
            </p>
          </div>

          {/* Role */}
          <div className="flex">
            <h2 className="my-auto mr-2 text-white font-semibold text-right ml-auto mt-2">
              Role:
            </h2>
            <p className="text-gray-400 mt-auto capitalize">
              {role ? role : "undefined"}
            </p>
          </div>

          {/* */}
        </div>
      )}
    </div>
  );
}
