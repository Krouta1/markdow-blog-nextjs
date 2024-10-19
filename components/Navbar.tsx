import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { MobileNav } from "./MobileNav";

type NavbarProps = {
  NavLinks: {
    name: string;
    url: string;
  }[];
};

const Navbar = ({ NavLinks }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/60 px-8 backdrop-blur">
      <div className="w-1/5 text-xl font-bold">Krouta&apos;s Blog</div>
      <ul className="hidden w-4/5 items-center justify-end space-x-4 md:flex">
        {NavLinks.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
        <li className="buttons space-x-2">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/signup"
          >
            Sign-up
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4 md:ml-4">
        <ModeToggle />
        <MobileNav NavLinks={NavLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
