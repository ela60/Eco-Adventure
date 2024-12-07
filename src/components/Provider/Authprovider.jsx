import { createContext, useState,useEffect } from 'react';
import {auth} from '../../Firebase.init';
import { onAuthStateChanged, signOut  } from 'firebase/auth';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const logout = () => {
      signOut(auth)
        .then(() => {
         alert("User logged out successfully");
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });
    };
  
    return (
      <AuthContext.Provider value={{ user, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
