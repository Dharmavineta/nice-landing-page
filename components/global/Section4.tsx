import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <div className="flex justify-center items-center mt-36 lg:mt-52 lg:justify-between">
      <div className=" hidden lg:block">
        <Image src={"/happy.png"} alt="" height={400} width={400} />
      </div>
      <div className="flex flex-col items-center gap-y-6 lg:items-start">
        <h1 className="text-center lg:text-start">Light Fast & PowerFul</h1>
        <p className="text-sky-700 max-w-prose text-center lg:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quis aliquam illum similique nostrum quidem voluptatum aut quibusdam
          nesciunt odit perferendis ex, delectus numquam non, exercitationem
          doloribus et illo dolor.
        </p>
        <p className="max-w-prose text-sky-700 text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Section4;
