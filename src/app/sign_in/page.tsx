"use client";

import SignInForm from "@/components/function/sign_in-form";
import { useAuth } from "@/context/AuthContext";
import { TokenResponse } from "@/types/Posts";
import { useState } from "react";

export default function SignIn() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
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
          body: JSON.stringify({ username, password })
        }
      );

      const data: TokenResponse = await response.json();
      if (response.ok) {
        localStorage.setItem("accessToken", data.access_token);
        login();
      } else {
        console.error("Login failed", data);
      }

    } catch (error) {
      console.error("Network error", error);
    }
  }

  return (
    <
      SignInForm
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      onSubmitAction={onSubitAction}
    />
  )
}
