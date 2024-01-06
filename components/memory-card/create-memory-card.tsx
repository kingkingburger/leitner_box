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
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "글자를 입력해주세요",
  }),
  content: z.string().min(1, {
    message: "내용을 입력해주세요",
  }),
});

export function CreateMemoryCard() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>제목</FormLabel>
                <FormControl>
                  <Input placeholder="제목을 입력해주세요" {...form} />
                </FormControl>
                <FormDescription>제목을 입력해주세요</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Card className="w-3/4 border-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">카드 만들기</CardTitle>
        </CardHeader>
        {/*<Form {...form}>*/}
        {/*  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">*/}
        {/*    <FormField*/}
        {/*      control={form.control}*/}
        {/*      name="title"*/}
        {/*      render={({ field }) => (*/}
        {/*        <FormItem>*/}
        {/*          <FormLabel>제목</FormLabel>*/}
        {/*          <FormControl>*/}
        {/*            <Input placeholder="제목을 입력해주세요" {...form} />*/}
        {/*          </FormControl>*/}
        {/*          <FormDescription>제목을 입력해주세요</FormDescription>*/}
        {/*          <FormMessage />*/}
        {/*        </FormItem>*/}
        {/*      )}*/}
        {/*    />*/}
        {/*  </form>*/}
        {/*</Form>*/}
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
