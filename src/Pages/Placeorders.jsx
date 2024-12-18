import React, { useState } from 'react'
import Cart from './Cart'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { useGlobalContext } from '../Context/ShopContext'
const Placeorders = () => {
  const [method,setmethod] = useState('Cash on delivery')
  const {navigate} = useGlobalContext();
  return (
    <div className='grid grid-cols-2 gap-4 mt-10 px-8'>
      <div className='flex  flex-col gap-4 w-full '>
        <hr />
        <div className='text-2xl font-medium'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex mt-4 gap-5 '>
          <input type="text"  className='border border-gray-400 rounded-sm py-2 text-left' placeholder='First Name' />
          <input type="text" className='border border-gray-400 rounded-sm py-2 text-left' placeholder='Last Name' />
        </div>
        <div className='mt-4  w-full'>
          <input type="email" className='min-w-[50%] w-[70%]  border border-gray-400 py-2 rounded-sm text-left'placeholder='Enter your Email ' />
        </div>
        <div className='mt-4 first-line:w-full'>
          <input type="email" className='min-w-[50%] w-[70%]  border border-gray-400 py-2 rounded-sm text-left'placeholder='Street' />
        </div>
        <div className='flex mt-4 gap-5 '>
          <input type="text"  className='border border-gray-400 rounded-sm text-left py-2' placeholder='City' />
          <input type="text" className='border border-gray-400 rounded-sm text-left py-2' placeholder='State' />
        </div>
        <div className='flex mt-4 gap-5 '>
          <input type="text"  className='border border-gray-400 rounded-sm text-left py-2' placeholder='Zipcode' />
          <input type="text" className='border border-gray-400 rounded-sm text-left py-2' placeholder='Country' />
        </div>
        <div className='mt-4 first-line:w-full'>
          <input type="email" className='min-w-[50%] w-[70%]  border border-gray-400 py-2 rounded-sm text-left'placeholder='Phone' />
        </div>
      </div>
      {/* ------Right Side------- */}
      <div className='grid h-auto items-start '>
        <p><Cart/></p>
        <div className='text-2xl font-medium pl-14 mt-5'>
          <Title text1={'Paymnets'} text2={' Methods'}/>
          <div className='flex gap-x-5 '>
            <div className='border flex items-center gap-3 p-2'>
            <p onClick={()=>setmethod('stripe')} className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.stripe_logo} alt={assets.stripe_logo} className={`h-5 mx-4 `} />
            </div>
            <div onClick={()=>setmethod('razorpay')}className='border flex items-center gap-3 p-2'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.razorpay_logo} alt={assets.stripe_logo} className='h-5 mx-4' />
            </div>
            <div onClick={()=>setmethod('Cash on delivery')}className='border flex items-center gap-3 p-2'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Cash on delivery' ? 'bg-green-400' : ''}`}></p>
            <p className='text-[12px]'>Cash on Delivery</p>
            </div>
          </div>
          <div className='flex items-end mt-5'>
            <button type="button" onClick={()=>navigate('orders')} className='bg-black text-white border rounded-sm text-[14px] px-8'>Placeorder</button>
          </div>
      </div>
      
      </div>
    </div>
  )
}

export default Placeorders