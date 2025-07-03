"use client";
import React, { useState } from "react";
import { dummyData, dummyDataProps } from "../dummyList";
import UserData from "./UserData";

export default function BoardList() {
  const [clicked, setClicked] = useState<dummyDataProps>(dummyData[0]);

  return (
    <div className="grid grid-cols-3 gap-10 px-0 w-fit">
      <div
        className={"flex flex-col gap-3 text-white col-span-2 w-[700px] px-2"}
      >
        <div className="flex justify-center items-center mx-auto  w-full mb-10">
          <div className="px-5 py-2 rounded-r-none border-r-0 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full ">
            search
          </div>
          <input
            type="text"
            className="px-5 py-2 rounded-l-none border-l-0 focus:outline-none  backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full  "
          />
        </div>
        <div className="flex gap-20 mx-auto justify-center header bg-gradient-to-r  from-cyan-400 to-blue-400 rounded-full w-[600px] items-center px- py-4 mb-3">
          <div className="px-13 w-40 text-center">Name</div>
          <div className="px-13 w-40 text-center">Status</div>
          <div className="px-13 w-40 text-center">Rank</div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center header md:max-h-80 md:overflow-y-auto pt-8 ">
          {dummyData.map((data) => {
            return (
              <div
                key={data.rank}
                onClick={() => setClicked(data)}
                className="grid grid-cols-3 text-center backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full md:w-[600px] w-full  py-2 cursor-pointer hover:bg-white/20 "
              >
                <div className=" w-50">{data.name}</div>
                <div className=" w-50">{data.status}</div>
                <div className=" w-50">{data.rank}</div>
              </div>
            );
          })}
        </div>
      </div>
      <UserData user={clicked} />
    </div>
  );
}
