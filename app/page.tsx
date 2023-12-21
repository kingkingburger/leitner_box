import Image from 'next/image'
import {Button} from "@/components/ui/button";
import DashboardPage from "@/app/(main)/(dashboard)/page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div><Button>버튼 입니다.</Button></div>
            <DashboardPage/>
        </main>
    )
}
