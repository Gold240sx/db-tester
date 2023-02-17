import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

//Contexts
// import { DatabaseContext } from "./context/dbContext";
// import { UserContext } from "./context/userContext";
// import { FormContext } from "./context/FormContext";
// import { ThemeContext } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DatabaseContext.Provider> */}
    {/* <UserContext.Provider> */}
    {/* <ThemeContext.Provider> */}
    {/* <FormContext.Provider> */}
    <App />
    {/* </FormContext.Provider> */}
    {/* </ThemeContext.Provider> */}
    {/* </UserContext.Provider> */}
    {/* </DatabaseContext.Provider>s */}
  </React.StrictMode>
);
