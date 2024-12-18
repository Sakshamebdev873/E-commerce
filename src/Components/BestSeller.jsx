import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
    const {products} = useGlobalContext();
    const [bestseller,setbestseller] = useState([])
    useEffect(()=>{
        const bestproducts = products.filter((item)=>item.bestseller)
        console.log(bestproducts)
        setbestseller(bestproducts.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-4xl'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='text-gray-600 text-xs px-20 py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione iusto magni, adipisci, nisi voluptatem mollitia laudantium obcaecati sint ipsam optio neque culpa, sapiente tempora quaerat id facilis necessitatibus? Odio.
        </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
  {bestseller.map((item,index)=>{
    return <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
  })}
</div>
    </div>
  )
}

export default BestSeller