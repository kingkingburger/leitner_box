"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

async function addCard(title: string, content: string) {
  await supabase.auth.getUserIdentities();
  const { data, error } = await supabase
    .from("card")
    .insert([{ title: title, content: content }]);

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  console.log("Data inserted", data);
  return data;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "글자를 입력해주세요",
  }),
  content: z.string().min(1, {
    message: "내용을 입력해주세요",
  }),
});

export function CreateMemoryCard() {
  const router = useRouter();
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values.title = ", values.title);
    console.log("values.content = ", values.content);
    await addCard(values.title, values.content);
  };

  return (
    <div className="flex justify-center pt-4">
      <Card className="w-3/4 border-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">카드 만들기</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>제목</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="제목을 입력해주세요"
                        className="border-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>내용</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="내용을 작성해주세요"
                        className="border-4 h-80"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        {/*<CardFooter className="flex justify-end">*/}
        {/*  <Button>카드 생성</Button>*/}
        {/*</CardFooter>*/}
      </Card>
    </div>
  );
}
