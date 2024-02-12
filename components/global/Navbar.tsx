"use client";
import React, { useState } from "react";
import { Contact, Home, Menu, Store, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ScrollTop } from "../use-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
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
        <nav className=" gap-x-10 hidden lg:flex ">
          {navLinks.map((link) => (
            <Link href={"/"} key={link.id}>
              <p>{link.label}</p>
            </Link>
          ))}
        </nav>
        <Button size={"sm"} className="hidden lg:block">
          Buy Now
        </Button>
        <div
          onClick={() => setClick(true)}
          className="cursor-pointer lg:hidden"
        >
          <Menu className="w-4 h-4" />
        </div>
      </div>
      <div
        className={cn(
          " inset-0 fixed transition-all duration-300 bg-slate-100 items-center justify-center flex z-50 w-full h-screen",
          click ? "left-0" : "left-[100%]"
        )}
      >
        <div
          onClick={() => setClick(false)}
          className="absolute cursor-pointer top-10 right-10"
        >
          <X className="w-6 h-6" />
        </div>
        <nav className=" gap-x-10 flex flex-col items-center justify-center text-black text-center space-y-10 ">
          {navLinks.map((link) => (
            <Link
              href={"/"}
              key={link.id}
              className="flex flex-shrink-0 border-b-2 border-transparent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              <p className=" text-4xl">{link.label}</p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
