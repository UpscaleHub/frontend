import Link from "next/link";
import React from "react";

type CardProps = {
  heading: string;
  details: string;
  btnText: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ heading, details, btnText, link }) => {
  return (
    <div
      className="w-full z-10  space-y-6 header p-5 h-[205px] border border-[#FFFFFF40] bg-white/5 rounded-xl backdrop-blur-[150px]
"
    >
      <h2 className="bg-gradient-to-b text-[16px]  to-blue-400 from-cyan-400 bg-clip-text text-transparent text-sm">
        {heading}
      </h2>
      <p className=" font-extralight text-white/83 text-[14px]">{details}</p>
      <div className=" flex justify-end">
        <Link href={link}>
          <button className=" p-2 px-8 rounded-full bg-gradient-to-r from-[#3e98d3] to-[#4a5aa4] text-[14px] text-white border-none cursor-pointer transition duration-300 ease-in-out">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
