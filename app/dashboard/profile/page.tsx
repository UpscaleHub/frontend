import React from "react";
import ProfileCard from "./components/profileCard";
import About from "./components/about";

const Page = () => {
  return (
    <div className="md:px-[40px] space-y-6">
      <div className="">
        <ProfileCard />
      </div>
      <div className=" flex justify-between">
        <div className=" w-1/2">
          <About />
        </div>
        <div className="">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Page;
