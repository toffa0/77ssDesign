"use client";

import axiosInstance from "@/helpers/axios";
import { createContext,useContext, useState, useEffect} from "react";
import { API_VERSION, BASE_URL } from "@/config";

export const AuthContext = createContext({
  user: undefined,
  setUser: async () => null,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

  const storeUser = () => {
    axiosInstance(`${API_VERSION}/user/details/`).then((res) => {
        setUser(res.data);
    }).catch((err) => {
        setUser(undefined);
    });
  };
    useEffect(() => {
        storeUser();
    }, []);
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
