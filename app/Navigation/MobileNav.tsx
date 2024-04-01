import { XCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#0e2531]`}
    >
      <XCircleIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
      />

      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
        <li className="text-[25px] cursor-pointer text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-[#ffc300] transition-all duration-200 ">
          <Link href="/">Services</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-[#ffc300] transition-all duration-200 ">
          <Link href="/">About Me</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-[#ffc300] transition-all duration-200 ">
          <Link href="/">Self Help</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-[#ffc300] transition-all duration-200 ">
          <Link href="/">Articles</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
