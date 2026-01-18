const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: { newTask: 1, active: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, taskTitle: "Prepare Daily Report", taskDescription: "Prepare and submit daily sales report", taskDate: "2025-01-05", category: "Reporting" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Client Follow-up", taskDescription: "Follow up with pending clients", taskDate: "2025-01-02", category: "Communication" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Data Backup", taskDescription: "Backup project files to server", taskDate: "2025-01-01", category: "IT" }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCount: { newTask: 1, active: 2, completed: 1, failed: 0 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, taskTitle: "Design Homepage", taskDescription: "Create UI design for homepage", taskDate: "2025-01-06", category: "Design" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Fix Navbar Bug", taskDescription: "Resolve navbar responsiveness issue", taskDate: "2025-01-03", category: "Development" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Team Meeting", taskDescription: "Attend weekly team meeting", taskDate: "2025-01-07", category: "Meeting" }
    ]
  }
]

const admin = [
  { id: 101, email: "admin@example.com", password: "123" }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
