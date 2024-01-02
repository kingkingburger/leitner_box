"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavigationCreateCount } from "@/components/navigation/navigation-create-account";
import { NavigationCreateMemoryCard } from "@/components/navigation/navigation-create-memory-card";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <NavigationCreateMemoryCard />
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
