"use client";

import SignUpForm from "@/components/function/register-form";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function Register() {
  const { setUser, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubitAction = async (): Promise<void> => {
    event?.preventDefault();

    const registerUrl = `${process.env.NEXT_PUBLIC_REGISTER_ENDPOINT}`;
    try {
      const response = await fetch(
        registerUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({ email, password, username })
        }
      );
      setUser((await response.json()));
      console.log(user);
    } catch (error) {
      console.error("Login Error: ", error);
    }
    redirect("/")
  }

  return (
    <
      SignUpForm
      email={email}
      password={password}
      username={username}
      setEmail={setEmail}
      setPassword={setPassword}
      setUsername={setUsername}
      onSubmitAction={onSubitAction}
    />
  )
}
