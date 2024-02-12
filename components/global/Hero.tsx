import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center lg:justify-between mt-36 max-w-[1440px] ">
      <div className="w-[1000px] hidden lg:block h-[1000px] absolute -right-96">
        <Image
          className="absolute  opacity-60  top-32 right-0 -z-10"
          alt=""
          src={"/blob.svg"}
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 lg:items-start">
        <h1 className="text-3xl max-w-lg text-center lg:text-start lg:text-5xl text-sky-950 font-semibold ">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="text-muted-foreground max-w-prose text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor
          itaque odio totam. Esse tempora, deserunt voluptas accusantium
          reprehenderit necessitatibus nulla hic reiciendis maxime tenetur
          numquam quasi error, impedit quos atque nostrum voluptatibus.
          Voluptatum, soluta facilis ratione harum assumenda commodi.
        </p>
        <div className="flex gap-x-5">
          <Button className="px-5" size={"sm"}>
            Purchase UI Kit
          </Button>
          <Button className="px-5" variant={"outline"} size={"sm"}>
            Learn More
          </Button>
        </div>
      </div>
      <div className="lg:block relative hidden">
        <Image src={"/19.png"} alt="" height={400} width={400} />
      </div>
    </section>
  );
};

export default Hero;
