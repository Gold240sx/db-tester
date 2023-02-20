import { useContext } from "react";
import { DbContext } from "../context/DbContext";

export const useDatabase = () => {
  const context = useContext(DbContext);

  if (context === undefined) {
    throw new Error("useDatabase() must be used within a DatabaseProvider");
  }

  return context;
};

// allows us to import only useDatabase hook, instead of useContext and DatabaseContext
