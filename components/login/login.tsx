"use client";

import { z } from "zod";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const supabase = createClient();

const formSchema = z.object({
  email: z.string().min(1, {
    message: "글자를 입력해주세요",
  }),
  password: z.string().min(1, {
    message: "내용을 입력해주세요",
  }),
});

async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    toast(`${error}`, {
      description: "로그인 에러",
      action: {
        label: "확인",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return data;
}

export function Login() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values = ", values);
    const user = await signInWithEmail(values.email, values.password);
    console.log("user = ", user);
    if (user) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="border-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          {/*<CardDescription className="grid grid-cols-2 gap-6">*/}
          {/*  Enter your email below to create your account*/}
          {/*</CardDescription>*/}
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="이메일을 입력해주세요"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="비밀번호을 작성해주세요"
                        className="border-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
