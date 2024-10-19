import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SiteConfig from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";

type NavbarProps = {
  NavLinks: {
    name: string;
    url: string;
  }[];
};

export function MobileNav({ NavLinks }: NavbarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size={"icon"}>
          <Menu className="size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>{SiteConfig.title}</SheetTitle>
          <SheetDescription>{SiteConfig.description}</SheetDescription>
        </SheetHeader>
        <div className="">
          <ul className="mt-6 flex w-full flex-col items-center justify-center gap-6">
            {NavLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
