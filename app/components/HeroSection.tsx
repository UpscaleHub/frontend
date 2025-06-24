import React from "react";
import { GiToken } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { RiAiGenerate2 } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function CTA() {
  return (
    <>
      <div className="px-30 flex flex-col  text-white h-auto">
        <p className="paragraph text-sm border w-fit  border-white/20 text-cyan-400 rounded-full  px-3 gap-0.5 mb-3 bg-white/10 backdrop-blur-md">
          Flexibility and efficiency
        </p>
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="header font-bold text-4xl mb-3">
              What Sets{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Upscale
              </span>{" "}
              Apart
            </h1>
            <p className="paragraph text- text-white/50 w-150">
              Explore the exceptional features that make Upscale your ultimate
              web3 certifier choice
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
                <span className="text-cyan-400 text-xl rounded-lg p-3 bg-white/10">
                  <RiAiGenerate2 />
                </span>
                <p className="paragraph text-md ">
                  AI Assitant to help you become Certified
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
                <span className="text-cyan-400  text-xl rounded-lg p-3 bg-white/10">
                  <VscVerifiedFilled />
                </span>
                <p className="paragraph text-md ">
                  Get Certified After taking Amplitude test
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
                <span className="text-cyan-400 text-lg rounded-lg p-3 bg-white/10">
                  <MdClass />
                </span>
                <p className="paragraph text-md ">Classes for all fields</p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
                <span className="text-cyan-400 text-lg rounded-lg p-3 bg-white/10">
                  <GiToken />
                </span>
                <p className="paragraph text-md ">
                  Earn Reward Token After Activies
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <video
              autoPlay
              className="w-[500px] h-[350px] object-cover rounded-2xl shadow-lg shadow-cyan-400/20 float-end"
              style={{ objectPosition: "50% 50%" }}
            >
              <source
                src="https://framerusercontent.com/assets/JufdyP3489wcFWRJPLOsfWZe18.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
