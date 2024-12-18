import React from 'react'

const Newsletter = () => {
  const handlesubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='text-center mt-5 pt-8'>
        <p className='text-2xl text-gray-500 font-medium'>Register now & get 20% off</p>
        <p className='text-gray-400 px-12 font-medium py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi animi modi sunt blanditiis harum ab aliquam odit quis explicabo, natus soluta sapiente omnis aperiam distinctio odio amet iste delectus officia.</p>
        <form className='flex items-center gap-3 w-[60%] mx-auto my-6 border pl-3 sm:flex-1' onSubmit={handlesubmit}>
            {/* required is used for fill every part of form it will not be submit */}
            <input type="email" required  className='w-full outline-none' placeholder='Enter your Email'/>
            <button type="submit" className='bg-black text-white p-10 py-5 text-xs'>Submit</button>
        </form>
    </div>
  )
}

export default Newsletter