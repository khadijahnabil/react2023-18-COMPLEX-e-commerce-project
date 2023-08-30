import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log(`user: ${user}`);
    console.log(`isLoading: ${isLoading}`);
    console.log(`isAuthenticated: ${isAuthenticated}`);
  }, [isAuthenticated]);
  return (
    <UserContext.Provider value={{ myUser, logout, loginWithRedirect }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
