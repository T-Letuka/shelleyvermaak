import React from "react";
import Image from "next/image";

interface CardContent {
  title: string;
  image: string;
  paragraph: string;
}

const BigCards = ({ image, paragraph, title }: CardContent) => {
  return (
    <div className="bg-[#e5e5e5] rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Left Section - Image */}
        <div className="md:w-1/3">
          <Image src={image} alt="Card Image" width={400} height={400} />
        </div>

        {/* Right Section - Paragraph */}
        <div className="md:w-2/3 p-4">
          <h2 className="font-bold mb-2 text-center">{title}</h2>
          <p className="text-black text-lg">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
