'use client';
import React from "react";


const Intro = () => {

  // alert("User in Intro: " + JSON.stringify(user));
  return (
    <div className=" paragraph mb-11">
      <h2 className=" text-white text-2xl">Welcome, User</h2>
      <span className="bg-gradient-to-b to-blue-400 from-cyan-400 bg-clip-text text-transparent text-sm ">
        Level 101
      </span>
      <p className=" text-[#5F5F5F] text-sm">
        Start your day by getting certified or learning a skill.
      </p>
    </div>
  );
};

export default Intro;
