"use client";
import React, { useState } from "react";
import { FiHome, FiTrash } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import logo from "../../imgs/Logo-c.png";

const History = () => {
  const [historyItems, setHistoryItems] = useState([
    { id: 1, title: "What is Graphic Designing?", timestamp: "2 hours ago" },
    { id: 2, title: "UI/UX Design Principles", timestamp: "1 day ago" },
    { id: 3, title: "Color Theory Basics", timestamp: "3 days ago" },
    { id: 4, title: "Typography Guidelines", timestamp: "1 week ago" },
  ]);

  const [activeItem, setActiveItem] = useState<number | null>(null);

  interface HistoryItem {
    id: number;
    title: string;
    timestamp: string;
  }

  const handleDeleteItem = (id: number) => {
    setHistoryItems(historyItems.filter((item: HistoryItem) => item.id !== id));
  };

  interface HandleItemClick {
    (id: number): void;
  }

  const handleItemClick: HandleItemClick = (id) => {
    setActiveItem(id);
    // Handle navigation or chat loading here
  };

  return (
    <div className="w-[280px] h-screen header flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <button className="w-full p-3 flex items-center gap-3 rounded-full px-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-white border-none cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
            <FiHome size={18} />
            <span className="font-medium">Dashboard</span>
          </button>
          <button className="w-full p-3 flex items-center gap-3 rounded-full px-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-white border-none cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
            <GoPlus size={18} />
            <span className="font-medium">New Chat</span>
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-hidden flex flex-col">
        <div className="mb-4">
          <h2 className="text-white text-base mb-2">History</h2>
          <div className="h-px bg-gradient-to-r from-white/30 to-transparent"></div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
          {historyItems.length > 0 ? (
            historyItems.map((item) => (
              <div
                key={item.id}
                className={`group p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10 ${
                  activeItem === item.id
                    ? "bg-white/15 border border-white/20"
                    : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="flex items-start ">
                  <p className="text-white text-sm font-medium truncate">
                    {item.title}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteItem(item.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-red-500/20 transition-all duration-200"
                  >
                    <FiTrash size={14} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-white/50 text-sm">No chat history yet</p>
              <p className="text-white/30 text-xs mt-1">
                Start a new conversation
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-4 border-t flex flex-row items-center border-white/10">
        <div className="flex items-center gap-3 text-white/70">
          <Image src={logo} alt="Scale Ai Logo" width={82} height={82} />
        </div>
        <div className="flex-1 text-white">Scale Ai</div>
      </div>
    </div>
  );
};

export default History;
