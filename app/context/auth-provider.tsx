// app/context/auth-provider.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthContext, User } from "./auth-context";
import { toast } from "@/components/ui/use-toast";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    error: string | null;
  }>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
  });

  // Check authentication status on mount and storage changes
  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem("authToken");
      const userData = localStorage.getItem("user");

      if (token && userData) {
        const user = JSON.parse(userData) as User;
        setAuthState({
          isAuthenticated: true,
          user,
          isLoading: false,
          error: null,
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: "Failed to check authentication status",
      });
    }
  }, []);

  useEffect(() => {
    checkAuth();

    // Listen for storage changes (like when user logs in from another tab)
    const handleStorageChange = () => checkAuth();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [checkAuth]);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Login failed");
      }

      // Store authentication data
      localStorage.setItem("authToken", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      setAuthState({
        isAuthenticated: true,
        user: data.user,
        isLoading: false,
        error: null,
      });

      // Show success toast
      toast({
        title: "Login Successful!",
        description: `Welcome back, ${data.user.firstName}!`,
      });

      // Navigate to home page
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error instanceof Error ? error.message : "Login failed",
      });
      toast({
        variant: "destructive",
        title: "Login Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during login",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuthState({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      error: null,
    });
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}