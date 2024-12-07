import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider"; 

export const useAuth = () => {
    //   const context = useContext(AuthContext);
    const context = {};
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
