import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] mt-48 my-10 w-auto'>
        <div>
            <img src={assets.logo} alt={assets.logo} className='mb-5 w-32' />
            <p className='w-[50%] md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem dignissimos at distinctio voluptatibus ex ratione quam tenetur, rem labore quasi nisi voluptate, est adipisci quis ullam veritatis possimus aperiam!
            </p>
        </div>
        <div className='m-auto'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div >
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-734567346</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
        <div className='w-full mx-52 pt-5'>
            <hr />
            <p className='text-center pt-4 mx-52'>Copyright @Forever.com - All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer