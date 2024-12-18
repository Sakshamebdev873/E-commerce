import React from 'react'
import Title from './Title'
import { useGlobalContext } from '../Context/ShopContext'
const Cartitems = () => {
    const {cartamount,currency,delivery_fee,navigate}= useGlobalContext();
  return (
    <div className='w-full mb-[-5px]'>
        
        <div className='flex flex-col gap-2 ml-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{cartamount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping fee</p>
                <p>{currency}{delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{cartamount() === 0 ? 0 : cartamount() + delivery_fee}</b>
            </div>
        </div>
        <div className={`flex items-end mt-5 ${cartamount() === 0 ? 'hidden' :'block'}`}>
            <button onClick={()=>navigate('/placeorders')} className={`cursor-pointer px-6 py-2 bg-black text-white text-center rounded-md`}>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cartitems