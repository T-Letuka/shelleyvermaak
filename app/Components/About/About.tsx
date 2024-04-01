import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import ginfo from "@/public/ginfo.png";

const About = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] ">
      <SectionHeading
        headingMini="Overview"
        description="Insights into My Background"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem]">
        <div className="order-2 lg:order-1">
          <Image src={ginfo} alt="hands" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            Located in Nigel on the East Rand, I offer online counseling for
            those unable to attend in person. My counseling expertise spans
            across various domains, and I am dedicated to referring individuals
            to appropriate resources should their needs fall beyond my scope of
            practice.Primarily, I specialize in addressing addiction-related
            concerns, offering support to both individuals and their families.
            <br />
            <br />
            Moreover, I possess extensive experience in aiding women confronted
            with a myriad of challenges, including but not limited to physical,
            sexual, and emotional abuse, managing traumatic experiences,
            navigating abusive relationships, and coping with co-dependency
            issues. Recently certified in Gestalt and Play Intervention, I also
            work with children and special needs individuals. LGBTQ-friendly and
            non-judgmental, I prioritize affordability to ensure counseling is
            accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
