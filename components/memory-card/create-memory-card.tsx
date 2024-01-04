"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateMemoryCard() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">카드 만들기</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="inset-0 flex items-center">
              <span className="w-full border"></span>
            </div>
          <div className="grid gap-2">
            <Label>제목</Label>
            <Input id="text" type="text" placeholder="제목을 설정해주세요" />
          </div>
          <div className="grid gap-2">
            <Label>내용</Label>
            <Input id="text" type="text" placeholder="내용을 설정해주세요" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>카드 생성</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
