"use client";

import SignUpForm from "@/components/function/register-form";
import { useAuth } from "@/context/AuthContext";
// import { redirect } from "next/navigation";
import { useState } from "react";


export default function Register() {
  const { setUser, user } = useAuth();
  const [email, setEmailAction] = useState("");
  const [password, setPasswordAction] = useState("");
  const [username, setUsernameAction] = useState("");

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
      console.error("Register Error: ", error);
    }
    // redirect("/")
  }

  return (
    <
      SignUpForm
      email={email}
      password={password}
      username={username}
      setEmailAction={setEmailAction}
      setPasswordAction={setPasswordAction}
      setUsernameAction={setUsernameAction}
      onSubmitAction={onSubitAction}
    />
  )
}
