import React from "react";

interface User {
  name: string;
  status: string;
  niche: string;
  APR: number;
  streak: number;
  course: string;
}

interface UserDataProps {
  user: User;
}
export default function UserData({ user }: UserDataProps) {
  return (
    <div className="text-white flex flex-col item-center justify-center  backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl w-[40p] h-[450px] px-20">
      {
        <div className="space-y-10 header">
          <p>Name: &nbsp; {user.name}</p>
          <p>Niche:&nbsp; {user.niche} </p>
          <p>APR: &nbsp;{user.APR}%</p>
          <p>Steak🔥:&nbsp; {user.streak}</p>
          <p>Course:&nbsp; {user.course}</p>
        </div>
      }
    </div>
  );
}
