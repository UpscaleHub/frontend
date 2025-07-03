import React from 'react'
import TaskCard from './components/TaskCard'
import CompletedTask from './components/CompletedTask'

export default function page() {
  return (
    <div className='text-white px-25'>
      <div className='flex justify-between items-center mb-5 '>
        <h1 className='header text-2xl'>Daily Task</h1>
        <h1 className='header text-2xl'>30 Points</h1>
      </div>
      <TaskCard/>
      <CompletedTask/>
    </div>
  )
}
