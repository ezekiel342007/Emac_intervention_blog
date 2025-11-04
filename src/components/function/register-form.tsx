"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, JSX, SetStateAction } from "react";
import { Button } from "../ui/button";

interface SignInFormProps {
  email: string;
  password: string;
  username: string;
  setEmailAction: Dispatch<SetStateAction<string>>;
  setPasswordAction: Dispatch<SetStateAction<string>>;
  setUsernameAction: Dispatch<SetStateAction<string>>;
  onSubmitAction: () => Promise<void>;
}

export default function SignUpForm(
  {
    email,
    password,
    username,
    setEmailAction,
    setPasswordAction,
    setUsernameAction,
    onSubmitAction
  }: SignInFormProps): JSX.Element {
  return (
    <div className="flex justify-center">
      <Card className="p-4 w-fit">
        <form onSubmit={onSubmitAction}>
          <div className="mb-6 mt-4 flex flex-col cols-">
            <div className="mb-5">
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input
                value={email}
                size={70}
                type="email"
                id="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmailAction(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <Label className="mb-2" htmlFor="username">Username</Label>
              <Input
                value={username}
                size={70}
                type="text"
                id="username"
                placeholder="John Doe"
                onChange={(e) => setUsernameAction(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5">
            <Label className="mb-2" htmlFor="password">Password</Label>
            <Input
              value={password}
              size={70}
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPasswordAction(e.target.value)}
            />
          </div>
          <Button type="submit">Sign in</Button>
          <p>Not registered? </p><Link href={"/register"}>Sign up</Link>
        </form>
      </Card>
    </div>
  )
}
