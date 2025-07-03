
import React from 'react'

export default function CompletedTask() {
    const dummyData = [
        {
            task:"Random Quiz",
            completed: true,
            point: 10
        },
        {
            task:"Take Class",
            completed: false,
            point: 0
        },
        {
            task:"Daily Streak 🔥",
            completed: true,
            point: 5
        },
        {
            task:"Random Quiz",
            completed: true,
            point: 10
        },
        {
            task:"Take Class",
            completed: false,
            point: 0
        },
    ]
  return (
    <div className='mt-6'>
        <h1 className='text-2xl header'>Completed Task</h1>
         <div className="flex flex-col gap-5 justify-start items-start header md:max-h-60 md:overflow-y-auto pt-8 ">
                  {dummyData.map((data,idx) => {
                    return (
                      <div
                        key={idx}
                        // onClick={() => setClicked(data)}
                        className="grid grid-cols-3 text-center backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full md:w-[600px]   py-2 cursor-pointer hover:bg-white/20 "
                      >
                        <div className=" w-50">{data.task}</div>
                        <div className=" w-50">{data.completed ? "Completed" : "Not Completed"}</div>
                        <div className=" w-50">{data.point}</div>
                      </div>
                    );
                  })}
                </div>

    </div>
  )
}
