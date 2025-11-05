"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
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
            <NavigationMenuLink href={"/sign_in/"}>{localStorage.getItem("userName") !== "" ? localStorage.getItem("userName") : "Sign in"}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
}
