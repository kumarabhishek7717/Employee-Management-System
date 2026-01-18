import React from 'react'

const NewTask = ({ data, onAccept }) => {
  return (
    <div className='h-full w-[300px] py-5 px-6 bg-blue-400 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      </div>
      <div className='mt-4'>
        <button
          onClick={onAccept}
          className='bg-green-500 py-1 px-2 text-sm rounded w-full'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
