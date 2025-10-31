"use client";

import SignInForm from "@/components/function/sign_in-form";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function SignIn() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubitAction = async (): Promise<void> => {
    event?.preventDefault();

    const signInUrl = `${process.env.NEXT_PUBLIC_SIGN_IN_ENDPOINT}`;
    try {
      const response = await fetch(
        signInUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({ email, password })
        }
      );
      let res = await response.json();
      console.log("we have error", res);
      setUser(res);

    } catch (error) {
      console.error("Login Error: ", error);
    }
  }

  return (
    <
      SignInForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmitAction={onSubitAction}
    />
  )
}
// 2257539759
