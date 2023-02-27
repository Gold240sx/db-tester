import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

//Contexts
import { DbProvider } from "./context/DbContext";
import { FirebaseAppProvider } from "reactfire";
import { UserProvider } from "./context/userContext";
import { FormProvider } from "./context/formContext";
import { ThemeProvider } from "./context/themeContext";
import { reactFireConfig } from "./Databases/ReactFire/reactFireConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DbProvider>
      <FirebaseAppProvider firebaseConfig={reactFireConfig}>
        <ThemeProvider>
          <UserProvider>
            <FormProvider>
              <App />
            </FormProvider>
          </UserProvider>
        </ThemeProvider>
      </FirebaseAppProvider>
    </DbProvider>
  </React.StrictMode>
);
