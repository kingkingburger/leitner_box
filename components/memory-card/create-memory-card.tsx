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
import { Textarea } from "@/components/ui/textarea";

export function CreateMemoryCard() {
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 border-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">카드 만들기</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="inset-0 flex items-center">
            <span className="w-full border"></span>
          </div>
          <div className="grid gap-2">
            <Label className="p-1">제목</Label>
            <Input

              id="text"
              type="text"
              placeholder="제목을 설정해주세요"
              className="border-4"
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">내용</Label>
            <Textarea
              placeholder="내용을 작성해주세요"
              id="message"
              className="border-4 h-80"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>카드 생성</Button>
        </CardFooter>
      </Card>
    </div>
  );
}