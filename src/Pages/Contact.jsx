import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'

const Contact = () => {
  return (
    <>
    <div className='text-2xl font-medium text-center mt-8'>
      <Title text1={'CONTACT'} text2={'US'} />
    </div>
    <div className='flex items-center'>
      <span><img src={assets.contact_img} alt={assets.contact_img} className='h-[78%] w-[50%]'/></span>
      <div>
        <p className='text-gray-400'>OUR Store</p>
      </div>
    </div>
    </>
  )
}

export default Contact