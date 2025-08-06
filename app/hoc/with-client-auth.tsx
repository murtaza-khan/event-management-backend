// app/hoc/with-client-auth.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { FullscreenLoader } from "@/components/fullscreen-loader";
import { toast } from "@/components/ui/use-toast";

export function withClientAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithClientAuthComponent(props: T) {
    const { isAuthenticated, isLoading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) {
          router.push("/auth/login");
        } else if (user && !user.isClient) {
          toast({
            variant: "destructive",
            title: "Access Denied",
            description: "This page is only accessible to clients",
          });
          router.push("/");
        }
      }
    }, [isAuthenticated, isLoading, user, router]);

    if (isLoading || !isAuthenticated || (user && !user.isClient)) {
      return <FullscreenLoader />;
    }

    return <WrappedComponent {...props} />;
  };
}