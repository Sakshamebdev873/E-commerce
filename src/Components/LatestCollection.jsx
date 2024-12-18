import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const LatestCollection = () => {
    const {products} = useGlobalContext();
    const [latestproducts,setlatestproducts] = useState([])
    // console.log(products)
    useEffect(()=>{
      setlatestproducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-center text-gray-500 text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odit, molestiae in recusandae sed soluta, dolorem, adipisci assumenda consequatur aut nobis laboriosam. Quia dolorem perspiciatis ab similique, pariatur inventore quisquam.</p>
        </div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
  {latestproducts.map((item,index)=>{
    return <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
  })}
</div>
    </div>
  )
}

export default LatestCollection