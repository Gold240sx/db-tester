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
    avatar: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
    avatarDefault: "https://i.ibb.co/c6c8Kb4/avatar-default.png",
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
