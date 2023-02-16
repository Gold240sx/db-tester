import React, { createContext, useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { createClient } from "@supabase/supabase-js";
import { useAuth } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import { supabaseUrl, supabaseKey } from "./supabaseKeys";

const DatabaseContext = createContext(null);

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const [database, setDatabase] = useState(null);

  function selectDatabase(databaseType) {
    switch (databaseType) {
      case "firebase":
        firebase.initializeApp(firebaseConfig);
        setDatabase(firebase.auth());
        break;
      case "supabase":
        const supabase = createClient(supabaseUrl, supabaseKey);
        setDatabase(supabase.auth);
        break;
      case "reactfire":
        const auth = useAuth();
        setDatabase(auth);
        break;
      default:
        throw new Error("Invalid database type");
    }
  }

  return (
    <DatabaseContext.Provider value={{ database, selectDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
}
