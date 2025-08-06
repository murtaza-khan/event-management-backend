// hooks/use-role-auth.ts
"use client";

import { useAuth } from "@/app/context/auth-context";

export function useRoleAuth() {
  const auth = useAuth();

  return {
    ...auth,
    isClient: auth.user?.isClient || false,
    isVendor: auth.user?.isVendor || false,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
  };
}