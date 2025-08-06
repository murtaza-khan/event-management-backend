// app/hoc/with-auth.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { FullscreenLoader } from "@/components/fullscreen-loader";

export function withAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuthComponent(props: T) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push("/auth/login");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading || !isAuthenticated) {
      return <FullscreenLoader />;
    }

    return <WrappedComponent {...props} />;
  };
}