"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { GithubIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login an account</CardTitle>
          <CardDescription className="grid grid-cols-2 gap-6">
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" className="border-4">
              <GithubIcon className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="border-4">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or Continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="border-4"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="border-4" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Create account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
