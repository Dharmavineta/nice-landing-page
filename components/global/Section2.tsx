import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="flex justify-center lg:justify-between mt-36 lg:mt-64">
      <div className="flex flex-col gap-y-6 lg:w-1/2 items-center lg:items-start">
        <h1 className="text-3xl lg:text-4xl">Light, Fast & Powerful</h1>
        <p className="max-w-prose text-sky-700 text-sm text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus
          omnis ullam impedit quas voluptatum, non animi nobis, laudantium quo
          odio repudiandae obcaecati velit incidunt? Numquam ut quas delectus
          similique.
        </p>
        <p className="max-w-prose text-sky-700 text-sm text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nobis tempore ea sit natus necessitatibus eum minus quis. Fugiat,
          dolorum.
        </p>
        <div className="flex gap-x-5">
          <div className="flex flex-col gap-y-4 items-center lg:items-start">
            <div>
              <Image src={"/Icon.png"} alt="" height={30} width={30} />
            </div>
            <h1>The Main Title</h1>
            <p className=" max-w-xs text-center lg:text-start text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              animi!
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-4">
            <div>
              <Image src={"/Icon.png"} alt="" height={30} width={30} />
            </div>
            <h1>The Main Title</h1>
            <p className=" max-w-xs text-center lg:text-start text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              ab?
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden w-1/2 lg:flex lg:justify-end">
        <div className="relative h-[400px] w-[400px]">
          <Image className="" fill alt="" src={"/section2.png"} />
        </div>
      </div>
    </section>
  );
};

export default Section2;
