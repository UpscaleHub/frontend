import React from 'react'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { MdOutlineClass } from 'react-icons/md';


const Tasks = [
    {
        icon: <GiPerspectiveDiceSixFacesRandom />,
        title: "Random Quiz",
        description: "Select a course and start your journey Select a course and start your journey",
        points: 3,
        button: "Start Quiz"
    },
    {
        icon: <MdOutlineClass />,
        title: " Take Class",
        description: "Select a course and start your journey Select a course and start your journey",
        points: 3,
        button: "Begin CLass"
    },
    {
        icon: <GiPerspectiveDiceSixFacesRandom />,
        title: "Daily Streaks",
        description: "Select a course and start your journey Select a course and start your journey",
        points: 3,
        button: "Start Quiz"
    },
]
export default function TaskCard() {
  return (
    <div className='md:flex  gap-10 md:px-0 px-10 '>
      {Tasks.map((task, idx) => (
        <div key={idx} className='header backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl p-7 space-y-1 md:h-auto h-fit' >
          <div className='text-4xl text-[#3e98d3]'>{task.icon}</div>
          <h3 className='text-2xl'>{task.title}</h3>
          <p className='text-sm font-light'>{task.description}</p>
          <div className="mt-5">
             <span className=''>{task.points} points</span>
          <button className='float-end p-2 px-8 rounded-full bg-gradient-to-r from-[#3e98d3] to-[#4a5aa4] text-[14px] text-white border-none cursor-pointer transition duration-300 ease-in-out'>{task.button}</button>
       
          </div>
          </div>
      ))}
    </div>
  )
}
