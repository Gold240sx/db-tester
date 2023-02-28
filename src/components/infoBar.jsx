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
      className="w-30 h-fit min-h-[448px] w-full min-w-fit flex-col overflow-hidden rounded-2xl bg-white p-5 ease-in-out dark:bg-black"
    >
      {/* fixed ^^ later */}
      <div
        ref={scrollableRef}
        className="h-full overflow-y-auto scrollbar-hide"
      >
        <div
          className={`${
            minimized ? "mx-auto" : "ml-auto  mr-2"
          } h-6 w-6 cursor-pointer rounded-full border hover:bg-white/25`}
          onClick={() => {
            setMinimized(!minimized);
          }}
        >
          {!minimized ? <p className="bg-red w-6 text-center">-</p> : null}
          {minimized ? <p className="w-6 text-center">+</p> : null}
        </div>
        <div style={{ maxHeight: "calc(min(532px, 60vh))" }} className="">
          {!minimized && (
            <div className="my-3 flex">
              <h2 className="my-auto mr-2  ml-auto text-right font-semibold">
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
            <div className="my-3 flex">
              {database && (
                <div className="ml-auto flex flex-row">
                  <h2 className="my-auto mr-2 ml-auto font-semibold">
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
            <div className="my-3 flex w-10 flex-col">
              <p className="mt-36 -rotate-90 whitespace-nowrap text-3xl  text-zinc-400 dark:text-white/40">
                Project Info
              </p>
              {form === "vanilla" ? (
                <img className="w-100 mx-auto mt-10 h-10" src={vanillaLogo} />
              ) : form === "reactHookForm" ? (
                <img
                  className="w-100 mx-auto mt-10 h-10"
                  src={reactHookFormLogo}
                />
              ) : form === "daisyUI" ? (
                <img className="w-100 mx-auto mt-10 h-10" src={daisyUILogo} />
              ) : null}
            </div>
          )}
          {minimized && (
            <div className="my-3 flex">
              {database === "Firebase" ? (
                <img className="mx-auto h-8 " src={firebaseLogo} />
              ) : database === "Supabase" ? (
                <img className="mx-auto h-8" s src={supabaseLogo} />
              ) : database === "ReactFire" ? (
                <img className="mx-auto h-8 " src={reactFireLogo} />
              ) : database === "Pocketbase" ? (
                <img className="mx-auto h-8 " src={pocketbaseLogo} />
              ) : null}
            </div>
          )}
          {minimized && (
            <div
              style={{ maxWidth: "2.6rem" }}
              className="mx-auto flex overflow-hidden"
            >
              <div className="absolute right-5  h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-black" />
              {avatar ? (
                <img
                  src={avatar}
                  className="mx-auto h-10 rounded-full object-cover"
                />
              ) : (
                <img
                  src={AvatarDefault}
                  className="mx-auto w-14 rounded-full"
                />
              )}
            </div>
          )}

          {/* minimized preview end */}

          {!minimized && (
            // User  info
            <div id="info-bar-user-Info  mt-3">
              <h1 className="my-auto ml-auto text-right text-xl font-semibold text-gray-400 underline">
                User Info
              </h1>

              {/* Avatar*/}
              <div className="mt-2 flex">
                <h2 className="my-auto mr-2 ml-auto mt-auto text-right font-semibold">
                  Avatar:
                </h2>
                <div className="absolute right-5  h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-black" />
                <div style={{ maxWidth: "2.6rem" }} className="overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      className="h-10 rounded-full object-cover"
                    />
                  ) : (
                    <img src={AvatarDefault} className="w-14 rounded-full" />
                  )}
                </div>
              </div>

              {/* Username */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  Username:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {username ? username : "undefined"}
                </p>
              </div>

              {/* Displayname */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  Display Name:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {displayname ? displayname : "undefined"}
                </p>
              </div>

              {/* Email */}
              <div className="flex">
                <h2 className="my-auto mr-2  ml-auto mt-2 text-right font-semibold">
                  Email:
                </h2>
                <p className="mt-auto lowercase text-gray-400">
                  {email ? email : "undefined"}
                </p>
              </div>

              {/*Address */}
              <div className="mt-2 flex">
                <h2 className="mr-2 ml-auto text-right font-semibold">
                  Address:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {address ? address.ln1 : "undefined"} <br />
                  {address ? `${address.city}, ` : null}
                  {address ? `${address.state} ` : null}
                  {address ? address.zip : null}
                </p>
              </div>

              {/* First Name */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  First Name:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {firstName ? firstName : "undefined"}
                </p>
              </div>

              {/* Last Name */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  Last Name:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {lastName ? lastName : "undefined"}
                </p>
              </div>

              {/* Role */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  Role:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {role ? role : "undefined"}
                </p>
              </div>

              {/* authFunction */}
              <div className="flex">
                <h2 className="my-auto mr-2 ml-auto mt-2 text-right font-semibold">
                  Auth Function:
                </h2>
                <p className="mt-auto capitalize text-gray-400">
                  {authFunction ? authFunction : "undefined"}
                </p>
              </div>

              {/* */}
              {/* USERS SECTION */}
              {!minimized && (
                <div id="info-bar-users-Info" className="  mt-5">
                  <h1 className="my-auto ml-auto text-right text-xl font-semibold text-gray-400 underline">
                    Users
                  </h1>
                  {/*  */}
                  <div className="flex">
                    <h1 className="my-auto mr-auto text-left text-lg font-semibold text-gray-600">
                      All Users
                    </h1>
                    <h1 className="my-auto ml-auto text-right text-lg font-semibold text-gray-600">
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
