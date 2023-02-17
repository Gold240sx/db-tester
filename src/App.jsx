import.meta.hot;
import { useState, useContext } from "react";
import DbForm from "./components/forms/dbForm";
import FormSelectForm from "./components/forms/formSelectForm";
// import { DatabaseContext, useDatabase } from "./context/dbContext";

export function App() {
  return (
    <div className="dark:bg-[#2b2b2a] bg-[#dbdbdb] h-screen p-16">
      <div className=" w-fit rounded-2xl bg-black/25">
        <DbForm />
        <FormSelectForm />
      </div>
    </div>
  );
}

export default App;
