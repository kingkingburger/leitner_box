"use client";

import { z } from "zod";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { supabase } from "@/lib/supabase/supabase";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "글자를 입력해주세요",
  }),
  password: z.string().min(1, {
    message: "내용을 입력해주세요",
  }),
});

async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "https://example.com/welcome",
    },
  });

  if (error) {
    toast(`${error}`, {
      description: "계정 생성 에러",
      action: {
        label: "확인",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return data;
}

export function CreateAccount() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const user = await signUpNewUser(values.email, values.password);

    if (user) {
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="border-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
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
              <Button type="submit">Create Account</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
