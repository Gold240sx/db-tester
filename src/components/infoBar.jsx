import React, { useState, useContext, useEffect, useRef } from "react";
import firebaseLogo from "../assets/icons/firebase.png";
import supabaseLogo from "../assets/icons/supabase.png";
import reactFireLogo from "../assets/icons/react-fire.png";
import pocketbaseLogo from "../assets/icons/pocketbase.png";
import vanillaLogo from "../assets/icons/vanilla.png";
import reactHookFormLogo from "../assets/icons/react-hook-form.png";
import daisyUILogo from "../assets/icons/daisyui.png";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";
import { useForm } from "../hooks/useForm";
import { DbContext, DbProvider } from "../context/DbContext";
import { useTheme } from "../hooks/useTheme";

export default function InfoBar() {
  const [minimized, setMinimized] = useState(true);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);
  const [infobarHeight, setInfobarHeight] = useState(0);
  const [mode, setMode] = useState("light");
  const { database } = useDatabase();
  const { form } = useForm();
  const infoBarRef = useRef(null);
  const scrollableRef = useRef(null);
  const {
    avatar,
    username,
    displayname,
    email,
    address,
    firstName,
    lastName,
    role,
  } = useUser();
  const { authFunction } = useForm();

  //   useEffect(() => {
  //     const infoBarElem = infoBarRef.current;
  //     const scrollableElem = scrollableRef.current;

  //     if (infoBarElem) {
  //       setInfobarHeight(infoBarElem.clientHeight);
  //     }

  //     if (infoBarElem && scrollableElem) {
  //       const handleScroll = () => {
  //         console.log(
  //           infoBarRef.current.scrollTop,
  //           infoBarRef.current.clientHeight,
  //           infoBarRef.current.scrollHeight
  //         );
  //         if (scrollableElem.scrollTop === 0) {
  //           setShowTopGradient(false);
  //         } else {
  //           setShowTopGradient(true);
  //         }

  //         if (
  //           scrollableElem.scrollTop + scrollableElem.clientHeight ===
  //           scrollableElem.scrollHeight
  //         ) {
  //           setShowBottomGradient(false);
  //         } else {
  //           setShowBottomGradient(true);
  //         }
  //       };

  //       infoBarElem.addEventListener("scroll", handleScroll);

  //       return () => {
  //         infoBarElem.removeEventListener("scroll", handleScroll);
  //       };
  //     }
  //   }, []);

  console.log("mode", mode);

  //   const gradientOverlay = {
  //     // position: "absolute",
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     maxHeight: "100%",
  //     backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, ${
  //       showTopGradient ? (mode === "light" ? "0.9" : "0.6") : 0.3
  //     }) 0%, rgba(0, 0, 0, 0) 15%), linear-gradient(to bottom, rgba(0, 0, 0, ${
  //       showBottomGradient ? (mode === "light" ? "0.9" : "0.6") : 0.3
  //     }) 0%, rgba(0, 0, 0, 0) 15%)`,
  //     transition: "background-image 0.3s ease-in-out",
  //     pointerEvents: "none",
  //     borderRadius: "1rem",
  //     zIndex: 60,
  //   };

  return (
    <div
      ref={infoBarRef}
      className="min-w-fit w-30 p-5 flex-col dark:bg-black bg-white rounded-2xl h-fit min-h-[448px] w-full overflow-hidden ease-in-out"
    >
      {/* fixed ^^ later */}
      <div
        ref={scrollableRef}
        className="overflow-y-auto h-full scrollbar-hide"
      >
        <div
          className={`${
            minimized ? "mx-auto" : "ml-auto  z-50"
          } rounded-full border h-6 w-6 cursor-pointer hover:bg-white/25`}
          onClick={() => {
            setMinimized(!minimized);
          }}
        >
          {!minimized ? <p className="w-6 text-center bg-red">-</p> : null}
          {minimized ? <p className="w-6 text-center">+</p> : null}
        </div>
        <div style={{ maxHeight: "calc(min(532px, 60vh))" }} className="">
          {!minimized && (
            <div className="flex my-3">
              <h2 className="my-auto mr-2  font-semibold text-right ml-auto">
                Form:
              </h2>
              {form === "vanilla" ? (
                <img className="h-8" src={vanillaLogo} />
              ) : form === "reactHookForm" ? (
                <img className="h-8" src={reactHookFormLogo} />
              ) : form === "daisyUI" ? (
                <img className="h-8" src={daisyUILogo} />
              ) : null}
            </div>
          )}
          {!minimized && (
            <div className="flex my-3">
              {database && (
                <div className="flex flex-row ml-auto">
                  <h2 className="my-auto mr-2 font-semibold ml-auto">
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
              <p className="dark:text-white/40 text-3xl -rotate-90 whitespace-nowrap  mt-36 text-zinc-400">
                Project Info
              </p>
              {form === "vanilla" ? (
                <img className="h-10 mx-auto w-100 mt-10" src={vanillaLogo} />
              ) : form === "reactHookForm" ? (
                <img
                  className="h-10 mx-auto w-100 mt-10"
                  src={reactHookFormLogo}
                />
              ) : form === "daisyUI" ? (
                <img className="h-10 mx-auto w-100 mt-10" src={daisyUILogo} />
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
                <img
                  src={AvatarDefault}
                  className="rounded-full w-14 mx-auto"
                />
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
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-auto">
                  Avatar:
                </h2>
                <div style={{ maxWidth: "2.6rem" }} className="overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      className="rounded-full h-10 object-cover"
                    />
                  ) : (
                    <img src={AvatarDefault} className="rounded-full w-14" />
                  )}
                </div>
              </div>

              {/* Username */}
              <div className="flex">
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  Username:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {username ? username : "undefined"}
                </p>
              </div>

              {/* Displayname */}
              <div className="flex">
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  Display Name:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {displayname ? displayname : "undefined"}
                </p>
              </div>

              {/* Email */}
              <div className="flex">
                <h2 className="my-auto mr-2  font-semibold text-right ml-auto mt-2">
                  Email:
                </h2>
                <p className="text-gray-400 mt-auto lowercase">
                  {email ? email : "undefined"}
                </p>
              </div>

              {/*Address */}
              <div className="flex mt-2">
                <h2 className="mr-2 font-semibold text-right ml-auto">
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
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  First Name:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {firstName ? firstName : "undefined"}
                </p>
              </div>

              {/* Last Name */}
              <div className="flex">
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  Last Name:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {lastName ? lastName : "undefined"}
                </p>
              </div>

              {/* Role */}
              <div className="flex">
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  Role:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {role ? role : "undefined"}
                </p>
              </div>

              {/* authFunction */}
              <div className="flex">
                <h2 className="my-auto mr-2 font-semibold text-right ml-auto mt-2">
                  Auth Function:
                </h2>
                <p className="text-gray-400 mt-auto capitalize">
                  {authFunction ? authFunction : "undefined"}
                </p>
              </div>

              {/* */}
              {/* USERS SECTION */}
              {!minimized && (
                <div id="info-bar-users-Info" className="  mt-5">
                  <h1 className="my-auto text-xl font-semibold text-right ml-auto underline text-gray-400">
                    Users
                  </h1>
                  {/*  */}
                  <div className="flex">
                    <h1 className="my-auto text-lg font-semibold text-left mr-auto text-gray-600">
                      All Users
                    </h1>
                    <h1 className="my-auto text-lg font-semibold text-right ml-auto text-gray-600">
                      Active
                    </h1>
                    {/* Users Avatars Section - Avatar: tooltip to the username, link to the dynamic user page*/}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* /* Add gradient overlay */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          height: infobarHeight,
          ...gradientOverlay,
        }}
      /> */}
    </div>
  );
}
