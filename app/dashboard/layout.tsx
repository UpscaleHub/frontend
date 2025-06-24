import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex md:h-screen">
      <div className="flex-1 flex flex-col ">
        <main className="flex-1  p-6">{children}</main>
        <div className="absolute inset-0 flex items-end justify-center top-0 translate-y-30 z-0">
        <div className="md:w-300 h-75 rounded-b-none bg-gradient-to-r  from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-50"></div>

      </div>
      </div>
    </div>
  );
}
