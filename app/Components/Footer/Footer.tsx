import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import whatsapp from "@/public/whatsapp.png";
import mailicon from "@/public/mailicon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pb-[3rem] pt[3rem]">
      <SectionHeading
        headingMini="Let's Talk"
        description="Feel free to contact me !"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem] border-b-[12px] border-b-[#03045E]">
        <div className="order 2 lg:order-1 md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Contact Me
          </h1>
          <p className="text-black  mb-[1rem] text-[18px] cursor-pointer hover:text-cyan-600 ">
            <Image src={whatsapp} alt="whatsapp-icon" width={30} height={30} />
            083 878 0861
          </p>
          <p className="text-black  mb-[1rem] text-[18px] cursor-pointer hover:text-cyan-600 ">
            <Image src={mailicon} alt="whatsapp-icon" width={30} height={30} />
            queries@shelleyvermaak.co.za
          </p>
        </div>
        <div className="order 2 lg:order-1 md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            My Operating hours
          </h1>
          <ul>
            <li>Monday To Thursday : 9am - 8pm</li>
            <li>Friday: 9am - 5pm</li>
            <li>Closed on saturday</li>
            <li>Sunday: 9am -5pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
