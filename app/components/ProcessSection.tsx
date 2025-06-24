import React from "react";
import { GiToken } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { RiAiGenerate2 } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function ProcessSection() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 px-30">
        <div className="">
          <video
            autoPlay
            className="w-[530px] h-[550px] object-cover rounded-2xl shadow-lg shadow-cyan-400/20 float-"
            style={{ objectPosition: "50% 50%" }}
          >
            <source
              src="https://framerusercontent.com/assets/0lM9e7MKuxzOwbXDGCqFvSAJM.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className=" text-white">
          <h1 className="header text-4xl">What’s Different in Our Process</h1>
          <p className="text-lg para">
            Explore the exceptional features that make LandFree your ultimate
            web development choice
          </p>

          <div className="grid grid-cols-2 gap-4 mt-5 text-white">
            <div className="flex flex-col items-start gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-cyan-400 text-xl rounded-lg p-3 w-auto">
                <RiAiGenerate2 />
              </span>
              <p className="paragraph text-md ">
                AI Assitant to help you become Certified
              </p>
            </div>
            <div className="flex items-start flex-col gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-cyan-400  text-xl rounded-lg p-0">
                <VscVerifiedFilled />
              </span>
              <p className="paragraph text-md ">
                Get Certified After taking Amplitude test
              </p>
            </div>
            <div className="flex items-start flex-col gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-cyan-400 text-lg rounded-lg p-3">
                <MdClass />
              </span>
              <p className="paragraph text-md ">Classes for all fields</p>
            </div>
            <div className="flex items-start flex-col gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-cyan-400 text-lg rounded-lg p-3">
                <GiToken />
              </span>
              <p className="paragraph text-md ">
                Earn Reward Token After Activies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
