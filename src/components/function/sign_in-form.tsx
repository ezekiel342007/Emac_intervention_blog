"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, JSX, SetStateAction } from "react";
import { Button } from "../ui/button";

interface SignInFormProps {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  onSubmitAction: () => Promise<void>
}

export default function SignInForm(
  {
    email,
    password,
    setEmail,
    setPassword,
    onSubmitAction
  }: SignInFormProps): JSX.Element {
  return (
    <div className="flex justify-center">
      <Card className="p-4 w-fit">
        <form onSubmit={onSubmitAction}>
          <div className="mb-6 mt-4">
            <Label className="mb-2" htmlFor="username">Email</Label>
            <Input
              value={email}
              size={70}
              type="email"
              id="username"
              placeholder="username"
              onChange={(e) => setEmail(e.target.value)}
            />
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
        </form>
      </Card>
    </div>
  )
}
