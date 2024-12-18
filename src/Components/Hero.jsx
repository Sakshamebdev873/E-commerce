import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Hero = () => {
  return (
    <div className='flex  w-[80%]  border justify-center items-center my-8 m-auto  border-gray-400'>
        {/* Hero Left side */}
        <div className='w-full flex items-center justify-center py-10 '>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='prta-regular font-semibold text-sm'>SHOP NOW</p>
                    <p className='w-8 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* hero right side */}
        <img src={assets.hero_img} alt={assets.hero_img} className='w-[450px] max-w-full' />
    </div>
  )
}

export default Hero;