import React, { createContext, useReducer } from "react";
import Avatar from "../assets/images/Avatar-prop.png";

export const UserContext = createContext();

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, database: action.payload };
    default:
      return state;
  }
  // return 'supabase' // this will work without the switch statement as a test.
};

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, {
    username: "Willy",
    displayname: "WillyYeau",
    email: "willy@will3000.com",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Male_Avatar.jpg",
    firstName: "Will",
    lastName: "Arnold",
    role: "Admin",
    address: {
      ln1: "2600 Anderson Rd",
      city: "couple",
      state: "WV",
      zip: "51248",
    },
  });

  const userAction = (database) => {
    dispatch({ type: "GET_USER", payload: user });
  };

  return (
    <UserContext.Provider value={{ ...state, userAction }}>
      {children}
    </UserContext.Provider>
  );
}
