"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useCallback, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function NavBar() {
  const { user, setUser } = useAuth();

  const userDetails = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_USER_ENDPOINT}`);

      if (response.status == 401 || response.status == 403) {
        setUser(undefined);
        return;
      }

      if (!response.ok)
        throw new Error("UserDetailsError: ", await response.json())

      setUser(await response.json());
    } catch (error) {
      setUser(undefined);
      console.error("Session verification failed", error);
    }
  }, [setUser]);

  useEffect(() => {
    userDetails();
  }, [userDetails]);

  return <div className="mb-36">
    <div className="flex justify-center fixed bg-white h-fit top-0 p-5 w-[100vw] z-50">
      <NavigationMenu className="mt-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/blogs/">Blogs</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Tech</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Career</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>All Categories</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href={"/sign_in/"}>{user ? user.username : "Sign in"}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
}
