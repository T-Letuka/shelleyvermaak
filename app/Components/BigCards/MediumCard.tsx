import React from "react";
interface Props {
  title: string;
  paragraph: string;
}

const MediumCard = ({ title, paragraph }: Props) => {
  return (
    <div className="bg-[#edede9] rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-full p-4">
        <h2 className="font-bold mb-2 text-center">{title}</h2>
        <p className="text-black text-lg">{paragraph}</p>
      </div>
    </div>
  );
};

export default MediumCard;
