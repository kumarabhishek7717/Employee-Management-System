const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Daily Report",
        description: "Prepare and submit daily sales report",
        date: "2025-01-05",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Follow up with pending clients",
        date: "2025-01-02",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Backup",
        description: "Backup project files to server",
        date: "2025-01-01",
        category: "IT"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create UI design for homepage",
        date: "2025-01-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve navbar responsiveness issue",
        date: "2025-01-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team Meeting",
        description: "Attend weekly team meeting",
        date: "2025-01-07",
        category: "Meeting"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Cleanup",
        description: "Remove unused records from database",
        date: "2025-01-02",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API Integration",
        description: "Integrate payment gateway API",
        date: "2025-01-08",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Deployment",
        description: "Deploy app on production server",
        date: "2025-01-04",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content Writing",
        description: "Write blog post for product launch",
        date: "2025-01-06",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Optimization",
        description: "Optimize website SEO keywords",
        date: "2025-01-01",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Post",
        description: "Create Instagram promotional post",
        date: "2025-01-07",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attendance Review",
        description: "Review team attendance records",
        date: "2025-01-02",
        category: "HR"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Interview Scheduling",
        description: "Schedule interviews for candidates",
        date: "2025-01-08",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Policy Update",
        description: "Update employee leave policy",
        date: "2025-01-03",
        category: "HR"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify (employees))

   localStorage.setItem('admin', JSON.stringify (admin))
}

export const getLocalStorage = () =>{

 const employees = JSON.parse (localStorage.getItem('employees'))
 const admin = JSON.parse (localStorage.getItem('admin')) 


 return(employees , admin)


}
