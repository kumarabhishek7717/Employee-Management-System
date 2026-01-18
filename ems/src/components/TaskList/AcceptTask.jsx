import React from 'react'

const AcceptTask = ({ data, onUpdate, onFail }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] py-5 px-6 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>

      <div className="flex justify-between mt-4">
        <button onClick={onUpdate} className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button onClick={onFail} className="bg-red-500 py-1 px-2 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
