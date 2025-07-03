'use client'
import React, { useState } from "react";
import { dummyData } from "@/app/leaderboard/dummyList";

export function About ()  {
  
  return (
    <div
      className={`z-5  w-[353px] h-[490px] space-y-6 header p-5  border border-[#FFFFFF40] bg-white/5 rounded-3xl backdrop-blur-[150px]`}>
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



export function Stats()  {
  const [view, setView] = useState("hidden")

  const toggle = () => {
   return view === "hidden" ? setView("block") : setView("hidden")
  }
  return (
     <div
      className={`w-[800px] h-auto z-5   space-y-6 header p-5  border border-[#FFFFFF40] bg-white/5 rounded-3xl backdrop-blur-[150px]`}>
    
       
      <div className=" space-y-3">
        <h2 className=" text-white text-center">Skillss</h2>
      
        <div className="">
          <ul className=" grid grid-cols-2 gap-10  px-20 py-4" >
            <li className=" text-white">
              XP: &nbsp; 20000
            </li>
            <li className=" text-white text-center">
              Course: &nbsp;5
            </li>
            <li className=" text-white">
              $UP Token: &nbsp;10
            </li>
            <li className=" text-white text-center">
              Streak: &nbsp;10
            </li>
            
          </ul>
        </div>

        <div className={`text-white ${view}`}>
          <h2 className="text-center">Quests</h2>
          <div className="flex flex-col gap-3 px-20 py-5">
            <p>Ongoing course: {dummyData[0].ongoingCourse}%</p>
            <p>Daily Quiz: {dummyData[0].dailyQuiz}</p>
            {/* <p>Streaks: {dummyData[0].streak}%</p> */}

          </div>

           <h2 className="text-center">Achievement</h2>
          <div className="flex flex-col gap-3 px-20 pt-5 pb-2">
            <p>Ongoing course: {dummyData[0].ongoingCourse}%</p>
            <p>Daily Quiz: {dummyData[0].dailyQuiz}</p>
            {/* <p>Streaks: {dummyData[0].streak}%</p> */}

          </div>
        </div>
        <p onClick={toggle} className="text-center text-white/30 cursor-pointer">{view === "hidden" ? "Show more" : "Show less"}</p>
      </div>
    </div>
  );
}


