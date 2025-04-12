
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom hook to access the UserContext
export const useUser = () => useContext(UserContext);

// Helper function to get the stored user data
const getStoredUser = () => {
  const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : { id: "", firstName: "", isLoggedIn: false, userType: "" };
};

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  // Sync user data with storage
  useEffect(() => {
    if (user.isLoggedIn) {
      const storage = user.rememberMe ? localStorage : sessionStorage;
      storage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
    }
  }, [user]);

  const login = (userData, rememberMe) => {
    setUser({...userData ,isLoggedIn: true, rememberMe });
  };

  const logout = () => {
    setUser({ id: "", firstName: "", isLoggedIn: false, userType: "" });
  };

  const contextValue = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
