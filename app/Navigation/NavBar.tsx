import React from "react";
import Link from "next/link";
import { Bars4Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white shadow-lg ">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-black">
          <span className="text-[27px] md:text-[40px] text-[#ca9b02]">S</span>
          helly
          <span className="text-[27px] md:text-[40px] text-[#ca9502] ml-[10px]">
            V
          </span>
          ermaak
        </h1>

        <ul className="hidden lg:flex item-center space-x-10">
          <li className="text-[17px] cursor-pointer text-blue-900 font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-[#ffc300] transition-all duration-200 ">
            <Link href="/">Services</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-[#ffc300] transition-all duration-200 ">
            <Link href="/">About Me</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-[#ffc300] transition-all duration-200 ">
            <Link href="/">Self Help</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-[#ffc300] transition-all duration-200 ">
            <Link href="/">Articles</Link>
          </li>
        </ul>
        <Bars4Icon
          onClick={openNav}
          className="w-[1.5rem] lg:hidden h-[2rem] text-[#03071e] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
