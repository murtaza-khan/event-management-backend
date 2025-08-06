// app/context/auth-context.tsx
"use client";

import { createContext, useContext } from "react";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "client" | "vendor";
  isClient: boolean;
  isVendor: boolean;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

export type AuthActions = {
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
};

export const AuthContext = createContext<(AuthState & AuthActions) | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};