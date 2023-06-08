"use client";

import axiosInstance from "@/helpers/axios";
import Cookies from "js-cookie";
import { createContext,useContext} from "react";
import { API_VERSION, BASE_URL } from "@/config";

export const AuthContext = createContext({
  user: undefined,
  setUser: async () => null,
});

export const AuthProvider = ({ children }) => {
  const storeUser = () => {
    axiosInstance(`${BASE_URL}/${API_VERSION}/user/details/`);
  };
  let user = undefined;
  if (
    Cookies.get("77SDESIGN_USER_TYPE") &&
    Cookies.get("77SDESIGN_UID") &&
    Cookies.get("77SDESIGN_USERNAME")
  ) {
    user =
      {
        user_type: Cookies.get("77SDESIGN_USER_TYPE"),
        id: Cookies.get("77SDESIGN_UID"),
        username: Cookies.get("77SDESIGN_USERNAME"),
      } || undefined;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: storeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
