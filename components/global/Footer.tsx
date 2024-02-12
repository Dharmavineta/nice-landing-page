import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Dribbble, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" min-h-[60vh] mt-32 ">
      <div className=" flex h-full items-center justify-center">
        <div className="flex flex-col  items-center gap-y-10 text-center">
          <h1 className="text-3xl lg:text-4xl text-center">
            A Price to Suit Everyone
          </h1>
          <p className="text-center text-sky-700 max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eaque
            vitae vero odio! Vitae delectus nobis corporis aliquid amet nisi.
          </p>
          <div>
            <h1 className="text-3xl font-bold">$40</h1>
            <p className="text-lg text-sky-700">Ui Design Kit</p>
          </div>
          <div>
            <p className="text-red-500 font-bold mb-4">50% Off</p>
            <Button size={"sm"}>Purchase now</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-36 p-5 md:p-0 items-center">
        <p className="text-muted-foreground text-sm"> &copy;2024 Krishna</p>
        <p className="text-muted-foreground hidden lg:block text-sm">SPYVPN</p>
        <Button size={"sm"} variant={"outline"}>
          Purchase now
        </Button>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex justify-between items-center flex-wrap py-5">
        <div className="flex gap-x-5 p-5 md:p-0">
          <Link className="text-muted-foreground" href={"/"}>
            Home
          </Link>
          <Link className="text-muted-foreground" href={"/"}>
            About
          </Link>
          <Link className="text-muted-foreground" href={"/"}>
            Contact
          </Link>
        </div>
        <div className="flex gap-x-5 p-5 md:p-0">
          <div className="text-muted-foreground">
            <TwitterLogoIcon className="w-4 h-4" />
          </div>
          <div className="text-muted-foreground">
            <InstagramLogoIcon className="w-4 h-4" />
          </div>
          <div className="text-muted-foreground">
            <Linkedin className="w-4 h-4" />
          </div>
          <div className="text-muted-foreground">
            <GitHubLogoIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
