import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

//Contexts
import { DbProvider } from "./context/DbContext";
import { UserProvider } from "./context/userContext";
import { FormProvider } from "./context/formContext";
// import { FormContext } from "./context/FormContext";
// import { ThemeContext } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DbProvider>
      <UserProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </UserProvider>
    </DbProvider>
  </React.StrictMode>
);
