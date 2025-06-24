import React from 'react'
import { FaCheck } from 'react-icons/fa6'

import { GoDotFill } from 'react-icons/go'

import Button from './Button'

export default function Hero() {
  return (
    <div className=' text-3xl min-h-screen  text-white mt-10'>
      <div className="flex flex-col  items-center justify-center h-100 md:px-0  z-10 relative">
        <p className='paragraph text-sm border border-cyan-300 pl-1 pr-2 rounded-full flex items-center gap-0.5 mb-5'><GoDotFill className='text-sm text-cyan-400' /> Powered by Near Protocol </p>
        <h1 className="md:text-[42px] text-3xl font-normal mb-4 text-center max-w-250 header w-3xl"><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">Upscale</span> : Elevating Success in Web3 - Unleashing Strategic Marketing</h1>
        <p className="text-[16px] mb-8 max-w-150 text-center paragraph">Efficient and Strightfoward and Hacking Delivered in less Than 5-Days Proven Results or Your money back</p>
        <Button text='Get Started'/>
          <div className='flex  items-center justify-center gap-6 mt-8'>
        <div className=" flex items-center text-xs gap-2 paragraph"><FaCheck className='text-white text-lg  rounded-md p-1 bg-white/30 ' />Proven Result</div>
        <div className=" flex items-center text-xs gap-2 paragraph"><FaCheck className='text-white text-lg  rounded-md p-1 bg-white/30 ' />Proven Result</div>
        <div className=" flex items-center text-xs gap-2 paragraph"><FaCheck className='text-white text-lg  rounded-md p-1 bg-white/30 ' />Proven Result</div>
      </div>
      </div>
  

    {/* subtle center glow */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-200 h-100 rounded-b-none bg-gradient-to-r  from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-50"></div>

      </div>
    <div className="grid paragraph grid-cols-4 gap-5 border-2 border-white/20 text-center bg-whit w-[1000px] place-items-center align-middle mx-auto mt-5 p-10 rounded-2xl backdrop-blur-xl">
      <div className="flex flex-col">26 <p className='text-sm'>Premium Subscribers</p></div>
      <div className="flex flex-col">100+ <p className='text-sm'>Active Users</p></div>
      <div className="flex flex-col">26 <p className='text-sm'>Certified Users</p></div>
      <div className="flex flex-col">2+ year <p className='text-sm'>Premium Subscribers</p></div>
    </div>



      
    </div>
  )
}
