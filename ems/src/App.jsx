import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
   
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  
  useEffect(()=>{

    if (authData){
      const loggedInuser = localStorage.getItem("loggedInUser")
       if (loggedInuser){
        setUser(loggedInuser.role)
       }
    }

  }, [authData]);
  

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
     setUser({role:'admin'})
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
        const employee = authData.employees.find((e) => email == e.email && e.password == password)
        if (employee){
          setUser({role:employee})
        }
        localStorage.setItem('loggedInUser',JSON.stringify({role:'emplyoee'}))

    } else {
      alert("Invalid Credentials")
    }

  }

 
  

  return (
    <div>
    
    < >

   {!user ? <Login handleLogin= {handleLogin} />: ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

   {/*<AdminDashboard />*/}
    </>
    </div>
  )
}

export default App
