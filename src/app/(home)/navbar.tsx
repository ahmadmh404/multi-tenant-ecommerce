"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuGroup } from "@base-ui/react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface NavbarItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white",
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="flex items-center pl-5">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          FunRoad
        </span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="hidden lg:block">
        <Button
          asChild
          variant={"secondary"}
          className="h-full border-0 border-l px-12 rounded-none bg-white hover:bg-pink-400 text-lg transition-colors"
        >
          <Link href={"/sign-in"}>Login</Link>
        </Button>
        <Button
          asChild
          className="h-full border-0 border-l px-12 rounded-none hover:bg-pink-400! hover:text-black text-lg transition-colors"
        >
          <Link href={"/sign-up"}>Start Selling</Link>
        </Button>
      </div>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant={"ghost"}
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/features", children: "Features" },
  { href: "/about", children: "About" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
