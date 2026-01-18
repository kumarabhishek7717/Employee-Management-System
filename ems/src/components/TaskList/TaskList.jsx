import React, { useContext } from 'react'
import AcceptTask from '../tasklist/AcceptTask'
import NewTask from '../tasklist/NewTask'
import CompleteTask from '../tasklist/CompleteTask'
import FailedTask from '../tasklist/FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (employeeId, taskIndex, status) => {
    const updatedData = userData.map(user => {
      if (user.id === employeeId) {
        const tasks = [...user.tasks]
        const task = tasks[taskIndex]
        tasks[taskIndex] = { ...task, ...status }

        const taskCount = { ...user.taskCount }

        if (status.completed) {
          taskCount.completed += 1
          taskCount.active = Math.max(taskCount.active - 1, 0)
          if (task.newTask) taskCount.newTask = Math.max(taskCount.newTask - 1, 0)
        }
        if (status.failed) {
          taskCount.failed += 1
          taskCount.active = Math.max(taskCount.active - 1, 0)
          if (task.newTask) taskCount.newTask = Math.max(taskCount.newTask - 1, 0)
        }
        if (status.active) {
          taskCount.active += 1
          if (task.newTask) taskCount.newTask = Math.max(taskCount.newTask - 1, 0)
        }

        return { ...user, tasks, taskCount }
      }
      return user
    })
    setUserData(updatedData)
  }

  return (
    <div className="h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap py-5 mt-10" id="tasklist">
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return (
            <AcceptTask
              key={idx}
              data={task}
              employeeId={data.id}
              onUpdate={() => updateTaskStatus(data.id, idx, { completed: true, active: false })}
              onFail={() => updateTaskStatus(data.id, idx, { failed: true, active: false })}
            />
          )
        }
        if (task.newTask) {
          return (
            <NewTask
              key={idx}
              data={task}
              employeeId={data.id}
              onAccept={() => updateTaskStatus(data.id, idx, { active: true, newTask: false })}
            />
          )
        }
        if (task.completed) return <CompleteTask key={idx} data={task} />
        if (task.failed) return <FailedTask key={idx} data={task} />

        return null
      })}
    </div>
  )
}

export default TaskList
