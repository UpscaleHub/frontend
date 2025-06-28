import React from "react";
import History from "./components/history";
import Message from "./components/message";

const Page = () => {
  return (
    <div className="md:px-[70px] justify-center flex flex-row md:gap-10 gap-5 w-full">
      <div className="">
        <History />
      </div>
      <div className="">
        <Message />
      </div>
    </div>
  );
};

export default Page;
