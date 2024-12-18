import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-12'>
      <div>
        <img src={assets.exchange_icon} alt={assets.exchange_icon} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500'>We offer hassle free Exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt={assets.quality_icon} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days return Policy</p>
        <p className='text-gray-500'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt={assets.support_img} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Customer support</p>
        <p className='text-gray-500'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy