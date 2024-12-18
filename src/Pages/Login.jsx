import React, { useState } from 'react'

const Login = () => {
  const [currentstate,setcurrentstate] = useState('Sign Up')
  const submithandle =(e)=>{
    e.preventDefault();
  }
  return (
    <div className='flex flex-col justify-center items-center w-full mt-12'>
      <div className='text-center flex items-center gap-2 '>
        <p className='text-2xl font-medium prata-regular'>{currentstate}</p>
        <p className='w-8 h-[3px] bg-gray-700'></p>
      </div>
      <form className='flex flex-col justify-center items-center mt-6' onSubmit={submithandle}>
        <div className='flex flex-col px-5 gap-4'>
          {currentstate === 'Login' ? <input type="text" className='border border-gray-400 rounded-sm text-base w-[20rem] py-2' placeholder='Full name' required />: ''}
          <input type="Email" className='border border-gray-400 rounded-sm text-base w-[20rem] py-2' placeholder='Email' required />
          <input type="Password" className='border border-gray-400 rounded-sm text-base w-[20rem] py-2' placeholder='Password' required />
        </div>
        <div className='flex justify-between items-center gap-10 w-[20rem] mt-2'>
          <p className='text-gray-700'>Forgot Password</p>
          {currentstate==='Login' ? <p onClick={()=>setcurrentstate('Sign Up') } className='text-black cursor-pointer '>Create Account</p>:<p onClick={()=>setcurrentstate('Login') } className='text-black cursor-pointer'>Login</p>}
        </div>
        <button type="button" className='text-center bg-black text-white px-4 py-2 rounded-sm mt-4'>{currentstate === 'Login' ? 'Login' : 'Sign Up'}</button>
      </form>
      </div>
  )
}

export default Login