import { useAuth } from "@/context/AuthContext";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const refreshToken = async (): Promise<void> => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
  } catch (error) {
    console.error("Error refreshing token: ", error);
  }
}
