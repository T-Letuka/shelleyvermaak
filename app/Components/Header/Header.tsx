"use client ";
import React from "react";
import hero1 from "@/public/hero1.png";
import Image from "next/image";

interface Props {
  heading: string;
  paragraph: string;
}

const Header = ({ heading, paragraph }: Props) => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2 ">
          <h1
            className="text-[25px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#001d3d]
           leading-[2.4rem] md:leading-[4rem]"
          >
            {heading}
          </h1>
          <p className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]">
            {paragraph}
          </p>
        </div>
        <div className="col-span-3 hidden xl:block lg:inline-block">
          <Image src={hero1} alt="hero-picture" priority />
        </div>
      </div>
    </div>
  );
};

export default Header;
