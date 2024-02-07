"use client";

import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Session } from "@supabase/gotrue-js/dist/module/lib/types";
import { useEffect, useState } from "react";

interface NavigationLoginProps {
  session: Session;
}

export const NavigationLogin = ({ session }: NavigationLoginProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const onClick = () => {
    router.push(`/login`);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      disabled={session?.user?.email?.length! > 0}
    >
      {session?.user?.email ? (
        session?.user?.email
      ) : (
        <LogIn className="h-6 w-61`" />
      )}
    </button>
  );
};
