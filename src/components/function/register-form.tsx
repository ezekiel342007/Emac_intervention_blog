"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, JSX, SetStateAction } from "react";
import { Button } from "../ui/button";

interface SignInFormProps {
  email: string;
  password: string;
  username: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
  onSubmitAction: () => Promise<void>;
}

export default function SignUpForm(
  {
    email,
    password,
    username,
    setEmail,
    setPassword,
    setUsername,
    onSubmitAction
  }: SignInFormProps): JSX.Element {
  return (
    <div className="flex justify-center">
      <Card className="p-4 w-fit">
        <form onSubmit={onSubmitAction}>
          <div className="mb-6 mt-4 flex flex-col cols-">
            <div className="">
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input
                value={email}
                size={70}
                type="email"
                id="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2" htmlFor="username">Username</Label>
              <Input
                value={email}
                size={70}
                type="text"
                id="username"
                placeholder="John Doe"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 mt-4">
            <Label className="mb-2" htmlFor="password">Password</Label>
            <Input
              value={password}
              size={70}
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Sign in</Button>
          <p>Not registered? </p><Link href={"/register"}>Sign up</Link>
        </form>
      </Card>
    </div>
  )
}
