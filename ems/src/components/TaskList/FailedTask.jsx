import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='h-full w-[300px] py-5 px-6 bg-gray-700 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-gray-900 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <p className='mt-4 text-sm font-semibold text-white'>Failed ❌</p>
    </div>
  )
}

export default FailedTask
