"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => { },
  logout: () => { },
  loading: true
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken)
      setAuthenticated(true);
  });

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider >
  )
}

export const useAuth = () => useContext(AuthContext);
