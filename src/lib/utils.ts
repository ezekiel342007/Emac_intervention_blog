import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const refresh = async (): Promise<string | undefined> => {
  try {
    const respose = await fetch("http://localhost:8000/api/token/refresh/", {
      method: "POST"
    });

    if (respose.ok) {
      const data = await respose.json();
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", data.access_token);
      return data.accessToken;
    } else {
      console.error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Error refreshing token: ", error);
  }
}
