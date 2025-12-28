import React from 'react'

const FailedTask = ({data}) => {
  return (
    
       <div className='h-full flex-shrink-0 w-[300px] py-5 px-6 bg-emerald-400 rounded-xl '>

            <div className='flex justify-between items-center'>
               <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
               <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>

            <div className='mt-2'>
                <button className='w-full'>Failed</button>

            </div>
         
        </div>
  )
}

export default FailedTask
