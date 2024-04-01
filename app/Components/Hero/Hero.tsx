import React from "react";
import hero from "@/public/hero.png";
import Image from "next/image";
import BlueButton from "../Buttons/BlueButton";
import GoldButton from "../Buttons/GoldButton";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2 ">
          <h1
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#001d3d]
           leading-[2.4rem] md:leading-[4rem]"
          >
            Your Trusted Guide to Wellness
          </h1>
          <p className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]">
            As a Registered Counsellor, I am committed to providing professional
            support to individuals seeking guidance.I approach my work with a
            passion for helping people navigate life's challenges. I believe in
            creating a safe and confidential space where clients can freely
            express themselves without fear of judgment. Rest assured, all
            sessions are conducted with the utmost confidentiality.
          </p>
          <div className="flex items-center space-x-4 md:space-x-6 mt-2">
            <BlueButton text="Book Appointment" />
            <GoldButton text="Explore Site" />
          </div>
        </div>

        <div className="col-span-3 hidden sm:block">
          <Image src={hero} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
