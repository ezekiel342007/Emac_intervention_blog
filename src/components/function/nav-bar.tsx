"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { User } from "@/types/Posts";
import { userDetails } from "@/lib/utils";
import { useEffect } from "react";

export default function NavBar() {

  let userName = "";
  let userData;
  useEffect(() => {
    userDetails().then((data: User) => { localStorage.setItem("currentUser", JSON.stringify(data)) });
    userData = localStorage.getItem("currentUser");
    if (userData)
      userName = JSON.parse(userData).username;
  }, [userData]);

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
            <NavigationMenuLink>All Categories</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href={"/sign_in/"}>{(userName !== "") ? userName : "Sign in"}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
}
