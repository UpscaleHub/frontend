import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoRibbon } from "react-icons/io5";

const ProfileCard = () => {
  return (
    <div
      className="w-full z-5 flex justify-between   space-y-6 header p-5 md:px-10 px-6 h-[128px] border border-[#FFFFFF40] bg-white/5 rounded-3xl backdrop-blur-[150px]
"
    >
      <div className=" w-1/6 flex flex-col gap-1.5 ">
        <div className=" flex items-start -space-x-3">
          <Image
            width={50}
            height={50}
            src={"https://tapback.co/api/avatar/johndoe"}
            alt=""
            className=" h-[50px] w-[50px] rounded-full"
          />
          <span>
            <FaStar color="#FA8F21" size={20} />
          </span>
        </div>
        <span className=" flex gap-2.5  uppercase text-lg text-white  items-center">
          JOEL <IoRibbon className="flex" />
        </span>
      </div>
      <div className=" text-white w-5/6 flex flex-col space-y-2 border-l-2 pl-10 border-cyan-500">
        <h2 className="bg-gradient-to-r text-[16px]  to-blue-400 from-cyan-400 bg-clip-text text-transparent text-sm">
          Level 101
        </h2>
        <span className=" text-sm">Beginner</span>
        <progress
          value="35"
          max="100"
          className="w-[429px] h-3 rounded-full overflow-hidden progress-bar"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
