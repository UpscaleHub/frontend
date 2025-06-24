import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

interface ButtonProps {
  onClick?: () => void;
    disabled?: boolean;
    text: string;
    className?: string;
    icon?: React.ReactNode;
}
export default function Button({text, className, icon = <FiArrowUpRight className='group-hover:rotate-45 duration-300 transition-all' /> }: ButtonProps) {
  return (
    
        <button className="bg-black  text-white pl-5 pr-4 py-1.5 rounded-full  group duration-500  cursor-pointer paragraph text-[16px] flex items-center justify-center  gap-3">
          {text} <span className='p-3 bg-gradient-to-l to-cyan-400 from-indigo-500 rounded-full'>{icon}</span>
        </button>
    
  )
}
