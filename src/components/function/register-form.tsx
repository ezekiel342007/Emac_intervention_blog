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
          <div className="mb-6 mt-4 flex flex-row gap-3">
            <div className="">
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input
                value={email}
                size={35}
                type="email"
                id="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2" htmlFor="username">Username</Label>
              <Input
                value={username}
                size={35}
                type="text"
                id="username"
                placeholder="John Doe"
                onChange={(e) => setUsername(e.target.value)}
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
          <Button type="submit">Register</Button>
        </form>
      </Card>
    </div>
  )
}
