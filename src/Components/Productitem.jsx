import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../Context/ShopContext'

const Productitem = ({id,name,image,price}) => {
    const {currency} = useGlobalContext();
  return (
    <Link to={`/product/${id}`} className='cursor-pointer text-gray-500 m-5'>
        <div className='overflow-hidden m-2'><img src={image[0]} alt={image[0]} className='hover:scale-110 transition-all ease-in'/></div>
        <p className='pt-4 pl-2'>{name}</p>
        <p className='pl-2 pt-2'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem