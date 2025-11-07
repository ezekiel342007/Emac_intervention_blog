"use client";

import SignInForm from "@/components/function/sign_in-form";
import { useAuth } from "@/context/AuthContext";
import { refreshToken } from "@/lib/utils"
import { useEffect, useState } from "react";

export default function SignIn() {
  const { setUser, user } = useAuth();
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

      setUser(res);

    } catch (error) {
      console.error("Login Error: ", error);
    }
  }

  useEffect(() => {
    localStorage.setItem("currentUser", user ? JSON.stringify(user) : "{}");
    localStorage.setItem("isAuthenticated", "true");
  }, [user])


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
