import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

type NavbarProps = {
  NavLinks: {
    name: string;
    url: string;
  }[];
};

const Navbar = ({ NavLinks }: NavbarProps) => {
  return (
    <nav className="sticky top-0 flex h-16 items-center border-b bg-background/60 px-8 backdrop-blur">
      <div className="w-1/5 text-xl font-bold">Krouta&apos;s Blog</div>
      <ul className="flex w-4/5 items-center justify-end space-x-4">
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
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
