import React from "react";

const About = () => {
  return (
    <div
      className="w-[353px] z-10   space-y-6 header p-5 h-[490px] border border-[#FFFFFF40] bg-white/5 rounded-xl backdrop-blur-[150px]
"
    >
      <div className=" space-y-2">
        <h2 className=" text-white">About</h2>
        <hr className=" border-t border-t-white/50" />
        <p className=" text-white font-extralight">
          Select a course and start your journey Select a course and start your
          journey. Select a course and start your journey Select a course and
          start your journey
        </p>
      </div>
      <div className=" space-y-3">
        <h2 className=" text-white">Skills</h2>
        <hr className=" border-t border-t-white/50" />
        <div className="">
          <ul className=" flex gap-2 flex-wrap">
            <li className=" bg-white/10 border w-fit p-2 px-2.5 rounded-full border-white/25 backdrop-blur-2xl text-white">
              Graphics Design
            </li>
            <li className=" bg-white/10 border w-fit p-2 px-2.5 rounded-full border-white/25 backdrop-blur-2xl text-white">
              Graphics Design
            </li>
            <li className=" bg-white/10 border w-fit p-2 px-2.5 rounded-full border-white/25 backdrop-blur-2xl text-white">
              Graphics Design
            </li>
            <li className=" bg-white/10 border w-fit p-2 px-2.5 rounded-full border-white/25 backdrop-blur-2xl text-white">
              Graphics Design
            </li>
            <li></li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default About;
