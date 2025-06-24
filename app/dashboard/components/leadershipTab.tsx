"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Table = () => {
  const data = [
    { name: "Alice", status: "Level101", rank: "#6" },
    { name: "Bob", status: "Level107", rank: "#16" },
    { name: "Charlie", status: "Level105", rank: "#16" },
    { name: "Andie", status: "Level105", rank: "#16" },
    { name: "Sam", status: "Level105", rank: "#16" },
    { name: "Akear", status: "Level105", rank: "#16" },
  ];

  return (
    <div className="md:w-[385px] w-full p-4 text-center header space-y-6 border border-white/20 rounded-3xl bg-white/5 backdrop-blur-2xl">
      <h2 className="bg-gradient-to-r text-[20px]  to-blue-600 from-cyan-400 bg-clip-text text-transparent text-sm py-2">
        Certified Users Leaderboard
      </h2>
      <div className="flex items-center justify-between border border-white/20 rounded-full bg-white/5 backdrop-blur-2xl px-2 py-1 space-x-2">
        <span className="flex-1 text-center text-white text-sm py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl">
          Name
        </span>
        <span className="flex-1 text-center text-white text-sm py-2 rounded-full border border-white/20">
          Status
        </span>
        <span className="flex-1 text-center text-white text-sm py-2 rounded-full border border-white/20">
          Rank
        </span>
      </div>

      <div className="mt-4 text-sm text-white/90 space-y-4">
        {data.map((person, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border border-white/10 rounded-full bg-white/5 backdrop-blur-xl px-4 py-3"
          >
            <span className="w-1/3 text-center">{person.name}</span>
            <span className="w-1/3 text-center">{person.status}</span>
            <span className="w-1/3 flex justify-center items-center gap-1 text-center">
              {person.rank}
              <FaStar color="#FA8F21" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
