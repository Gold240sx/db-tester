// import React, { createContext, useContext, useState } from "react";
// // import firebase from "firebase/app";
// // import { auth } from "../Databases/firebase/firebase";
// // import { createClient } from "@supabase/supabase-js";
// // import { useAuth } from "reactfire";
// // import { firebaseConfig } from "../Databases/firebase/firebaseConfig";
// import { supabaseKey, supabaseUrl } from "../Databases/Supabase/supabase";

// console.log(supabaseKey, supabaseUrl);
// // export const DatabaseContext = createContext({
//   database: null,
// });
// // console.log(supabaseKeys);

// export function useDatabase() {
//   return useContext(DatabaseContext);
// }

// export function DatabaseProvider({ children }) {
//   const [database, setDatabase] = useState(null);

//   function selectDatabase(databaseType) {
//     switch (databaseType) {
//       case "firebase":
//         firebase.initializeApp(firebaseConfig);
//         setDatabase(firebase.auth());
//         break;
//       case "supabase":
//         const supabase = createClient(supabaseUrl, supabaseKey);
//         setDatabase(supabase.auth);
//         break;
//       case "reactfire":
//         const auth = useAuth();
//         setDatabase(auth);
//         break;
//       default:
//         throw new Error("Invalid database type");
//     }
//   }

//   return (
//     <DatabaseContext.Provider value={{ database, selectDatabase }}>
//       {children}
//     </DatabaseContext.Provider>
//   );
// }

// import { createContext, useContext, useState } from "react";
// import firebase from "firebase/app";
// import app, { auth } from "../Databases/Firebase/firebase.js";
// import { createClient } from "@supabase/supabase-js";
// import { useAuth } from "reactfire";
// import firebaseConfig from "../Databases/firebase/firebaseConfig";
// import supabaseKeys from "../Databases/Supabase/supabase";
