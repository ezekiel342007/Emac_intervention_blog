import { User } from "@/types/Posts";
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

export const userDetails = async (): Promise<User | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_USER_ENDPOINT}`);

    if (response.status == 401 || response.status == 403) {
      return undefined;
    }

    if (!response.ok)
      throw new Error("UserDetailsError: ", await response.json())

    return (await response.json());
  } catch (error) {
    console.error("Session verification failed", error);
    return (undefined);
  }
}

