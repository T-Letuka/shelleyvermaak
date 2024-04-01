import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
import React from "react";

interface CardContent {
  title: string;
  image: string;
  paragraph: string;
}

const Cards = ({ title, image, paragraph }: CardContent) => {
  return (
    <div
      className="text-center bg-[#000814] p-4  rounded-lg hover:shadow-lg transition-all duration-300
  cursor-pointer hover:scale-110"
    >
      <Image
        src={image}
        alt="icon"
        width={300}
        height={300}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white ">
        {title}
      </h1>
      <p className="mt-[1rem] text-white opacity-90 text-[15px]">{paragraph}</p>
    </div>
  );
};

export default Cards;
