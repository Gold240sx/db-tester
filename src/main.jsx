import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

//Contexts
import { DatabaseContext } from "./DatabaseContext";
import { UserContext } from "./UserContext";
import { FormContext } from "./FormContext";
import { ThemeContext } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DatabaseContext.Provider>
      <UserContext.Provider>
        <ThemeContext.Provider>
          <FormContext.Provider>
            <App />
          </FormContext.Provider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </DatabaseContext.Provider>
  </React.StrictMode>
);
