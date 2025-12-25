"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("access_token");
    if (token) {
      setIsAuthenticated(true);
      setUser({ email: "intern@example.com", role: "admin" });
    }
  }, []);

  const logout = () => {
    deleteCookie("access_token");
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logout, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);