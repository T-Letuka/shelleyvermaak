import React from "react";
interface Heading {
  headingMini: string;
  description: string;
}

const SectionHeading = ({ headingMini, description }: Heading) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#adb5bd] md:text-[16px] text-[15px]">{headingMini}</p>
      <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#212529]">
        {description}
      </h1>
    </div>
  );
};

export default SectionHeading;
