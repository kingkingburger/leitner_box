"use client";

import {Home} from "lucide-react";
import {useRouter} from "next/navigation";

export const NavigationHome = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/');
    }


    return (
        <button
            onClick={onClick}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
            <Home className="h-6 w-61"/>
        </button>
    )
}