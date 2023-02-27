import React, { useState, useContext } from "react";
import { useForm } from "../hooks/useForm";
import { useDatabase } from "../hooks/useDatabase";
import SignUp from "./authForms/signUp/signUp";
import SignIn from "./authForms/signIn/signIn";
import DeleteAccount from "./authForms/deleteAccount/deleteAccount";
import CreateUser from "./authForms/createUser/createUser";
import DeleteUser from "./authForms/deleteUser/deleteUser";
import UpdateEmail from "./authForms/updateEmail/updateEmail";
import UpdatePassword from "./authForms/updatePassword/updatePassword";
import InviteUser from "./authForms/inviteUser/inviteUser";
import UpdateDisplayName from "./authForms/updateDisplayName/updateDisplayName";
import EmailUser from "./authForms/emailUser/emailUser";
import DowngradeUser from "./authForms/downgradeUser/downgradeUser";
import VerifyEmail from "./authForms/verifyEmail/verifyEmail";
import UpdateAvatar from "./authForms/updateAvatar/updateAvatar";
import BanUser from "./authForms/banUser/banUser";
import SignOut from "./authForms/signOut/signOut";

export default function FunctSelectForm() {
  const [selected, setSelected] = useState();
  const { changeAuthFunction } = useForm();
  const { database } = useDatabase();
  const user = true;

  const tailRadioButtonStyles = (
    value
  ) => `cursor-pointer border-white border-2 px-2 rounded-md active:border-white/50 hover:box-shadow-lg
  ${
    selected === value
      ? "border-lime-400 dark:text-lime-600 dark:bg-lime-800/30 bg-zinc-300 text-white"
      : ""
  }
  ${!selected ? "dark:hover:bg-lime-800/50 dark:hover:text-white/90" : ""}
`;

  const handleAuthFunction = (value) => {
    changeAuthFunction(value);
    setSelected(value);
  };

  return (
    <div className="rounded-2xl dark:bg-black/25  bg-white/25 mx-auto h-fit px-8 py-4 mt-10 w-[520px]">
      <h1 className="dark:text-gray-600 font-bold text-4xl text-center text-slate-300 m-4">
        Auth Functions...
      </h1>
      {/* Auth Functions Radio Button Select */}
      <form className="text-white flex-col whitespace-none mx-auto flex">
        {/* Row 1 */}
        <div className="flex gap-3 justify-center my-2">
          {" "}
          <div className="flex gap-2">
            {/*  Sign In */}
            <label
              htmlFor="SIGN_IN-Radio"
              className={tailRadioButtonStyles("SignIn")}
              onClick={() => handleAuthFunction("SignIn")}
            >
              SignIn
            </label>
            <input
              id="SIGN_IN-Radio"
              type="radio"
              name="database"
              value="SignIn"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "SignIn"}
              className="my-auto hidden"
            />
          </div>
          {/* Sign out */}
          <div className="flex gap-2">
            <label
              htmlFor="SIGN_OUT-Radio"
              className={tailRadioButtonStyles("SignOut")}
            >
              SignOut
            </label>
            <input
              id="SIGN_OUT-Radio"
              type="radio"
              name="database"
              value="SignOut"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "SignOut"}
              className="my-auto hidden"
            />
          </div>
          {/* Sign up */}
          <div className="flex gap-2">
            <label
              htmlFor="SIGN_UP-Radio"
              className={tailRadioButtonStyles("SignUp")}
            >
              SignUp
            </label>
            <input
              id="SIGN_UP-Radio"
              type="radio"
              name="database"
              value="SignUp"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "SignUp"}
              className="my-auto hidden"
            />
          </div>
          {/* Update DisplayName */}
          <div className="flex gap-2">
            <label
              htmlFor="UPDATE_DISPLAYNAME-Radio"
              className={tailRadioButtonStyles("UpdateDisplayName")}
            >
              Update DisplayName
            </label>
            <input
              id="UPDATE_DISPLAYNAME-Radio"
              type="radio"
              name="database"
              value="UpdateDisplayName"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "UpdateDisplayName"}
              className="my-auto hidden"
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-3 justify-center  my-2">
          {/* Update Email */}
          <div className="flex gap-2">
            <label
              htmlFor="UPDATE_EMAIL-Radio"
              className={tailRadioButtonStyles("UpdateEmail")}
            >
              Update Email
            </label>
            <input
              id="UPDATE_EMAIL-Radio"
              type="radio"
              name="database"
              value="UpdateEmail"
              //UPDATE_EMAIL
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "UpdateEmail"}
              className="my-auto hidden"
            />
          </div>
          {/* Update Password */}
          <div className="flex gap-2">
            <label
              htmlFor="UPDATE_PSSWD-Radio"
              className={tailRadioButtonStyles("UpdatePassword")}
            >
              Update Password
            </label>
            <input
              id="UPDATE_PSSWD-Radio"
              type="radio"
              name="database"
              value="UpdatePassword"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "UpdatePassword"}
              className="my-auto hidden"
            />
          </div>
          {/* Delete Account */}
          <div className="flex gap-2">
            <label
              htmlFor="DEL_ACCT-Radio"
              className={tailRadioButtonStyles("DeleteAccount")}
            >
              Delete Account
            </label>
            <input
              id="DEL_ACCT-Radio"
              type="radio"
              name="database"
              value="DeleteAccount"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "DeleteAccount"}
              className="my-auto hidden"
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-3 justify-center  my-2">
          {/* Create User */}
          <div className="flex gap-2">
            <label
              htmlFor="Create_User-Radio"
              className={tailRadioButtonStyles("CreateUser")}
            >
              CreateUser
            </label>
            <input
              id="Create_User-Radio"
              type="radio"
              name="database"
              value="CreateUser"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "CreateUser"}
              className="my-auto hidden"
            />
          </div>
          {/* Invite User*/}
          <div className="flex gap-2">
            <label
              htmlFor="INVITE_USER-Radio"
              className={tailRadioButtonStyles("InviteUser")}
            >
              Invite User
            </label>
            <input
              id="INVITE_USER-Radio"
              type="radio"
              name="database"
              value="InviteUser"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "InviteUser"}
              className="my-auto hidden"
            />
          </div>
          {/* Delete User */}
          <div className="flex gap-2">
            <label
              htmlFor="DEL_USER-Radio"
              className={tailRadioButtonStyles("DeleteUser")}
            >
              Delete User
            </label>
            <input
              id="DEL_USER-Radio"
              type="radio"
              name="database"
              value="DeleteUser"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "DeleteUser"}
              className="my-auto hidden"
            />
          </div>
          <div>
            {/* Ban User */}
            <div className="flex gap-2">
              <label
                htmlFor="BAN_USER-Radio"
                className={tailRadioButtonStyles("BanUser")}
              >
                Ban User
              </label>
              <input
                id="BAN_USER-Radio"
                type="radio"
                name="database"
                value="BanUser"
                onChange={(e) => handleAuthFunction(e.target.value)}
                checked={selected === "BanUser"}
                className="my-auto hidden"
              />
            </div>
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex gap-3 justify-center  my-2">
          {/* Downgrade User */}
          <div className="flex gap-2">
            <label
              htmlFor="DOWNGRADE_USER-Radio"
              className={tailRadioButtonStyles("DowngradeUser")}
            >
              Downgrade User
            </label>
            <input
              id="DOWNGRADE_USER-Radio"
              type="radio"
              name="database"
              value="DowngradeUser"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "DowngradeUser"}
              className="my-auto hidden"
            />
          </div>
          {/* Email User */}
          <div className="flex gap-2">
            <label
              htmlFor="EMAIL_USER-Radio"
              className={tailRadioButtonStyles("EmailUser")}
            >
              Email User
            </label>
            <input
              id="EMAIL_USER-Radio"
              type="radio"
              name="database"
              value="EmailUser"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "EmailUser"}
              className="my-auto hidden"
            />
          </div>
          {/* Update Avatar */}
          <div className="flex gap-2">
            <label
              htmlFor="UPDATE_AVATAR-Radio"
              className={tailRadioButtonStyles("UpdateAvatar")}
            >
              Update Avatar
            </label>
            <input
              id="UPDATE_AVATAR-Radio"
              type="radio"
              name="database"
              value="UpdateAvatar"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "UpdateAvatar"}
              className="my-auto hidden"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-center  my-2">
          {/* Verify Email */}
          <div className="flex gap-2">
            <label
              htmlFor="VERIFY_EMAIL-Radio"
              className={tailRadioButtonStyles("VerifyEmail")}
            >
              Verify Email
            </label>
            <input
              id="VERIFY_EMAIL-Radio"
              type="radio"
              name="database"
              value="VerifyEmail"
              onChange={(e) => handleAuthFunction(e.target.value)}
              checked={selected === "VerifyEmail"}
              className="my-auto hidden"
            />
          </div>
        </div>
      </form>
      {database && selected === "SignIn" && <SignIn />}
      {database && selected === "SignUp" && <SignUp />}
      {database && selected === "SignOut" && <SignOut />}
      {database && selected === "UpdateEmail" && <UpdateEmail />}
      {database && selected === "UpdatePassword" && <UpdatePassword />}
      {database && selected === "UpdateDisplayName" && <UpdateDisplayName />}
      {database && selected === "DeleteAccount" && <DeleteAccount />}
      {database && selected === "CreateUser" && <CreateUser />}
      {database && selected === "InviteUser" && <InviteUser />}
      {database && selected === "DeleteUser" && <DeleteUser />}
      {database && selected === "BanUser" && <BanUser />}
      {database && selected === "DowngradeUser" && <DowngradeUser />}
      {database && selected === "EmailUser" && <EmailUser />}
      {database && selected === "VerifyEmail" && <VerifyEmail />}
      {database && selected === "UpdateAvatar" && <UpdateAvatar />}
      {/* User is Signed  in */}
    </div>
  );
}
