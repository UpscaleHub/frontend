import React from "react";
import ProfileCard from "./components/profileCard";
import { About, Stats } from "./components/about";

const Page = () => {
  return (
    <div className="md:px-[100px] space-y-6">
      <div className="">
        <ProfileCard />
      </div>
      <div className="w-full flex flex-col gap-0 items-center md:grid md:grid-cols-3 md:items-start md:justify-center">
        <About />
        <Stats />
      </div>
    </div>
  );
};

export default Page;
