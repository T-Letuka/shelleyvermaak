"useclient";
import React, { useState } from "react";

interface Props {
  title: string;
  paragraph: string;
}

const ReadMore = ({ title, paragraph }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="bg-[#] shadow-md rounded-md max-w-xs mx-5 my-3 ">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className={`text-gray-700 mb-4 ${isOpen ? "block" : "truncate"}`}>
          {paragraph}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-600 hover:underline"
        >
          {isOpen ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
