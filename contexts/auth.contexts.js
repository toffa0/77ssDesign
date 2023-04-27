"use client";

import axiosInstance from "@/helpers/axios";
import Cookies from "js-cookie";
import { createContext } from "react";
import { API_VERSION, BASE_URL } from "@/config";
import { useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  setUser: async () => null,
});

export const AuthProvider = ({ children }) => {
  const storeUser = () => {
    axiosInstance(`${BASE_URL}/${API_VERSION}/user/details/`);
  };
  const user = {
    user_type: Cookies.get("user_type"),
    user_id: Cookies.get("user_id"),
    username: Cookies.get("username"),
  };
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
