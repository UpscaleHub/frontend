import React from "react";
import Intro from "./components/intro";
import Feature from "./components/feature";

const Page = () => {
  return (
    <div className=" md:px-[40px]">
      <Intro />
      <Feature />
    </div>
  );
};

export default Page;
