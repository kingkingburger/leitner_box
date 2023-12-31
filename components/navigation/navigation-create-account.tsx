"use client";

import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export const NavigationCreateCount = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/login`);
  };

  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      <LogIn className="h-6 w-61`" />
    </button>
  );
};
