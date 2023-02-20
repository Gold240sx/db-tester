import React, { createContext, useReducer } from "react";

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
    avatar: true,
    firstName: "Will",
    lastName: "Arnold",
    role: "Admin",
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
