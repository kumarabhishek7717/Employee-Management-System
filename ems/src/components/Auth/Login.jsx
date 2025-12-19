import React, { useState } from 'react'

const Login = () => {

  const[email, setEmail] = useState(" ")
  const [password , setPassword] = useState(" ")

    const submitHandler = (e) =>{
      e.preventDefault()
       console.log("email is" , email);
       console.log("password is " , password);

       setEmail("")
       setPassword("") 
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
            
        }}
         className='flex flex-col items-center justify-center'>
            <input
            value ={email}
            onChange={(e)=>{ 
              setEmail(e.target.value);
            }} 

            required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg  py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input
            value={password}
             onChange={(e)=>{
                 setPassword(e.target.value)
             }}
            required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg mt-3 py-2 px-6 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            <button className='text-white outline-none border-none border-2 hover:bg-emerald-600 text-lg mt-7 py-2 px-8 rounded-full placeholder:text-white'> Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
