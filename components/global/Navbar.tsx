"use client";
import React from "react";
import { Contact, Home, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ScrollTop } from "../use-scroll";

const Navbar = () => {
  const navLinks = [
    { id: 1, label: "Home", icon: Home },
    { id: 2, label: "About", icon: Store },
    { id: 3, label: "Contact", icon: Contact },
  ];

  const scroll = ScrollTop();
  return (
    <header
      className={cn(
        "fixed bg-white top-0 left-0 bottom-0 right-0 w-full h-16 z-30",
        scroll ? "border-b border-opacity-100" : "border-0 border-opacity-0"
      )}
    >
      <div className="flex justify-between px-10 xl:px-0 max-w-[1500px] mx-auto h-full items-center ">
        <Link href={"/"} className="text-xl font-extrabold">
          <p>
            SPY
            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-sky-500 via-orange-500 to-purple-500">
              VPN
            </span>
          </p>
        </Link>
        <nav className="flex gap-x-10">
          {navLinks.map((link) => (
            <Link href={"/"} key={link.id}>
              <p>{link.label}</p>
            </Link>
          ))}
        </nav>
        <Button size={"sm"}>Buy Now</Button>
      </div>
    </header>
  );
};

export default Navbar;
