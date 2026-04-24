import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ReactNode } from "react";

interface NavbarItem {
  href: string;
  children: ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NavbarSidebar({ items, open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transform-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full p-4 text-left flex items-center hover:bg-black hover:text-white text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
        </ScrollArea>

        <div className="border-t mt-auto">
          <Link
            href={"sign-in"}
            className="w-full p-4 text-left flex items-center hover:bg-black hover:text-white text-base font-medium"
            onClick={() => onOpenChange(false)}
          >
            Login
          </Link>

          <Link
            href={"sign-up"}
            className="w-full p-4 text-left flex items-center hover:bg-black hover:text-white text-base font-medium"
            onClick={() => onOpenChange(false)}
          >
            Start Selling
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
