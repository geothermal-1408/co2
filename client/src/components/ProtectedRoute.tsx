// app/components/ProtectedRoute.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingState from "@/components/LoadingState/LoadingState";
import Login from "@/app/login/page";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      Login(); // Redirect to the sign-in page
    }
  }, [status, router]);

  if (status === "loading") {
    return <LoadingState message="Loading session..." />;
  }

  return <>{session ? children : null}</>;
}
