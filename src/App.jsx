import.meta.hot;
import { useState, useContext } from "react";
import DbForm from "./components/forms/dbForm";
import SignIn from "./components/forms/signIn";
import SignOut from "./components/forms/signOut";
import FormSelectForm from "./components/forms/formSelectForm";
import { ToastContainer } from "react-toastify";
import InfoBar from "./components/infoBar";
import { useDatabase } from "./hooks/useDatabase";

export function App() {
  const { database } = useDatabase();
  const [selected, setSelected] = useState(null);
  const user = true;

  const tailRadioButtonStyles = (
    value
  ) => `cursor-pointer border-white border-2 px-2 rounded-md active:border-white/50
  ${selected === value ? "border-lime-400 text-lime-600 bg-lime-800/30" : ""}
  ${!selected ? "hover:bg-lime-800/50 hover:text-white/90" : ""}
`;

  return (
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] py-16 px-8 flex w-screen min-h-screen min-w-[700px]">
      <div className="flex-col w-full">
        <div
          id="db-input-form"
          className=" w-fit rounded-2xl bg-black/25 max-w-1/2 mx-auto h-fit"
        >
          <DbForm />
          <FormSelectForm />
          <ToastContainer />
        </div>
        <div className="rounded-2xl bg-black/25 mx-auto h-fit px-8 py-4 mt-10 w-[700px]">
          <h1 className="text-gray-600 font-bold text-4xl text-center">
            Auth Functions...
          </h1>
          {/* Auth Functions Radio Button Select */}
          <form className="text-white flex-col whitespace-none mx-auto flex">
            <div className="flex gap-3 justify-center my-2">
              {" "}
              <div className="flex gap-2">
                <label
                  for="SIGN_IN-Radio"
                  className={tailRadioButtonStyles("SignIn")}
                >
                  SignIn
                </label>
                <input
                  id="SIGN_IN-Radio"
                  type="radio"
                  name="database"
                  value="SignIn"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "SignIn"}
                  className="my-auto hidden"
                />
              </div>
              {/* Sign out */}
              <div className="flex gap-2">
                <label
                  for="SIGN_OUT-Radio"
                  className={tailRadioButtonStyles("SignOut")}
                >
                  SignOut
                </label>
                <input
                  id="SIGN_OUT-Radio"
                  type="radio"
                  name="database"
                  value="SignOut"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "SignOut"}
                  className="my-auto hidden"
                />
              </div>
              {/* Sign up */}
              <div className="flex gap-2">
                <label
                  for="SIGN_UP-Radio"
                  className={tailRadioButtonStyles("SignUp")}
                >
                  SignUp
                </label>
                <input
                  id="SIGN_UP-Radio"
                  type="radio"
                  name="database"
                  value="SignUp"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "SignUp"}
                  className="my-auto hidden"
                />
              </div>
              {/* Update DisplayName */}
              <div className="flex gap-2">
                <label
                  for="UPDATE_DISPLAYNAME-Radio"
                  className={tailRadioButtonStyles("UpdateDisplayName")}
                >
                  Update DisplayName
                </label>
                <input
                  id="UPDATE_DISPLAYNAME-Radio"
                  type="radio"
                  name="database"
                  value="UpdateDisplayName"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "UpdateDisplayName"}
                  className="my-auto hidden"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-center  my-2">
              {/* Update Email */}
              <div className="flex gap-2">
                <label
                  for="UPDATE_EMAIL-Radio"
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
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "UpdateEmail"}
                  className="my-auto hidden"
                />
              </div>
              {/* Update Password */}
              <div className="flex gap-2">
                <label
                  for="UPDATE_PSSWD-Radio"
                  className={tailRadioButtonStyles("UpdatePassword")}
                >
                  Update Password
                </label>
                <input
                  id="UPDATE_PSSWD-Radio"
                  type="radio"
                  name="database"
                  value="UpdatePassword"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "UpdatePassword"}
                  className="my-auto hidden"
                />
              </div>
              {/* Delete Account */}
              <div className="flex gap-2">
                <label
                  htmlFor="DEL_ACCT-Radio"
                  className={tailRadioButtonStyles("DEL_ACCT")}
                >
                  Delete Account
                </label>
                <input
                  id="DEL_ACCT-Radio"
                  type="radio"
                  name="database"
                  value="DEL_ACCT"
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === "DEL_ACCT"}
                  className="my-auto hidden"
                />
              </div>
            </div>
          </form>
          {database && selected === "SignIn" && <SignIn AuthFunct={selected} />}

          {/* User is Signed  in */}
          {/* {user && <SignOut />} */}
          {/* {database === "Firebase" && <SignOut />} */}
        </div>
      </div>
      <InfoBar />
    </div>
  );
}

export default App;
