"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, JSX, SetStateAction } from "react";
import { Button } from "../ui/button";

interface SignInFormProps {
  username: string;
  password: string;
  setUsername: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  onSubmitAction: () => {}
}

export default function SignInForm(
  {
    username,
    password,
    setUsername,
    setPassword,
    onSubmitAction
  }: SignInFormProps): JSX.Element {
  return (
    <div className="flex justify-center">
      <Card className="p-4 w-fit">
        <form onSubmit={onSubmitAction}>
          <div className="mb-6 mt-4">
            <Label className="mb-2" htmlFor="username">Username</Label>
            <Input
              value={username}
              size={70}
              type="text"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
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
