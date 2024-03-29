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
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { toast } from "sonner";

const supabase = createClient();

async function addCard(title: string, content: string) {
  await supabase.auth.getUserIdentities();
  const resultData = await supabase
    .from("card")
    .insert([{ title: title, content: content }]);

  console.log("resultData = ", resultData);

  if (resultData.error) {
    console.error("Error inserting data", resultData.error);
    return resultData;
  }

  return resultData;
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
    const card = await addCard(values.title, values.content);
    if (card.status > 200 && card.status < 300) {
      router.push("/");
      return;
    }

    toast(`카드가 생성되지 않았습니다.`, {
      description: "카드 생성 에러",
      action: {
        label: "확인",
        onClick: () => console.log("Undo"),
      },
    });
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
      </Card>
    </div>
  );
}
