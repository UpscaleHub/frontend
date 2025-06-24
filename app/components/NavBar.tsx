"use client";
import Image from "next/image";
import React from "react";
import logo from "../imgs/Logo-L.png";
import Link from "next/link";

export default function NavBar() {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 290) {
      navbar?.classList.add(
        "fixed",
        "top-0",
        "mx-auto",
        "w-fit",
        "z-50",
        "justify-center",
        "mt-5",
        "backdrop-blur-2xl",
        "bg-white/10",
        "border",
        "border-white/20",
        "rounded-full",
        "px-7",
        "py-4"
      );
    } else {
      navbar?.classList.remove(
        "fixed",
        "top-0",
        "mx-auto",
        "w-fit",
        "z-50",
        "mt-5",
        "backdrop-blur-2xl",
        "bg-white/10",
        "border",
        "border-white/20",
        "rounded-full",
        "px-7",
        "py-4"
      );
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center justify-between md:px-10 px-2 py-4 text-white md:mt-0">
      <Link href={"/"}>
        <Image src={logo} alt="" width={1000} height={10} className="w-30" />
      </Link>
      <div className="navbar flex items-center b space-x-2 ">
        <ul className={"md:flex space-x-10 paragraph text-sm hidden"}>
          <li className="hover:text-gray-300 cursor-pointer">Benefits</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <Link href={"/signup"}>
          <div className="bg-gradient-to-l to-blue-400 from-indigo-500 p-[2.5px] w-fit rounded-full">
            <button className=" bg-black text-white px-5 py-2 rounded-full paragraph text-sm cursor-pointer">
              Sign Up
            </button>
          </div>
        </Link>
        <Link href={"/login"}>
          <button className="bg-gradient-to-l to-blue-400 from-indigo-500  text-white px-6 py-2 rounded-full paragraph text-[16px] cursor-pointer hover:bg-gray-600 ml-2 ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
