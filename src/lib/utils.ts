import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const refreshToken = async (): Promise<void> => {
  try {
    const respose = await fetch("http://localhost:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    if (respose.ok) {
      const data = await respose.json();
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", data.access);
    } else {
      console.error("Failed to refresh token: ", await respose.json());
    }
  } catch (error) {
    console.error("Error refreshing token: ", error);
  }
}
