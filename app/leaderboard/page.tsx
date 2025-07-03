import React from "react";
import BoardList from "./components/BoardList";

export default function page() {
  return (
   <center>
     <div className=" bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-[1200px] py-10">
      <h1 className="header text-center text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        LEADERBOARD
      </h1>

      <BoardList />
       <div className="absolute inset-0 flex items-end justify-center top-0 translate-y-0 -z-1">
          <div className="md:w-300 h-75 rounded-b-none bg-gradient-to-r  from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-50"></div>
        </div>
    </div>

   </center>
  );
}
