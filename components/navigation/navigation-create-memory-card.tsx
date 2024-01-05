"use client";

import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { StickyNote } from "lucide-react";

export const NavigationCreateMemoryCard = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/memory-card`);
  };

  return (
    <button
      onClick={onClick}
      className="flex text-sm font-medium text-muted-foreground transition-colors hover:text-primary "
    >
      <div className="px-2 py-2 border-2 rounded">카드 만들기</div>
      {/*<StickyNote className="h-6 w-61" />*/}
    </button>
  );
};
