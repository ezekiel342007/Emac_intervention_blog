"use client";

import SignInForm from "@/components/function/sign_in-form";
import { useAuth } from "@/context/AuthContext";
import { refreshToken } from "@/lib/utils"
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
      const res = await response.json();
      if (response.status == 401)
        refreshToken();


      console.log("we have error", res);

      localStorage.setItem("user", res);
      localStorage.setItem("isAuthenticated", "true");
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
