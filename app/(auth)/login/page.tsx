"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


const Page = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLocalError("");
    if (!email || !password) {
      setLocalError("Email and password are required.");
      return;
    }
   
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2 body px-6 py-10">
        <div className="bg-white/30 border border-white/50  bg-clip-padding backdrop-filter backdrop-blur-sm  p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 paragraph">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold  header bg-gradient-to-b to-blue-400 from-cyan-400 bg-clip-text text-transparent">
              Log In
            </h2>
            <span className="text-base text-gray-200 paragraph">
              Welcome Back
            </span>
          </div>

        {/* {(localError || error) && (
            <div className={` border  px-4 py-3 rounded relative ` + ((localError || error)?.includes("Successful") ? "border-green-400 text-green-700 bg-green-100" : "border-red-400 text-red-700")}> 
              {localError || error}
            </div>
          )} */}

          <button className="w-full h-10 mb-4 border text-sm text-white border-[#E5E5E5] flex items-center justify-center gap-2 rounded-lg  cursor-pointer transition">
            <FcGoogle size={25} />
            Continue With Google
          </button>
          <button className="w-full h-10 mb-4 border text-sm text-white border-[#E5E5E5] flex items-center justify-center gap-2 rounded-lg  cursor-pointer transition">
            <FaXTwitter size={25} />
            Continue With X
          </button>

          <div className="flex items-center gap-2">
            <hr className="flex-grow border-t border-white" />
            <span className="text-sm text-gray-100">or</span>
            <hr className="flex-grow border-t border-white" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="border border-[#E5E5E5] bg-[#F3F4F6]/30  backdrop-blur-lg rounded-lg px-3 py-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="border border-[#E5E5E5] bg-[#F3F4F6]/30  backdrop-blur-lg rounded-lg px-3 py-2 focus:outline-none "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
      
              />
            </div>

            <button
              type="submit"
      
              className="w-full header cursor-pointer bg-gradient-to-b to-blue-400 from-cyan-400  text-white py-2 rounded-full hover:bg-[#1b3c3a] transition font-medium disabled:opacity-50"
            >
              {"Login"}
            </button>
          </form>

          <div className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/signup" className=" font-bold underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <Image
          width={800}
          height={600}
          src="https://placehold.co/800x600?text=Login+Illustration"
          alt="Login Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
