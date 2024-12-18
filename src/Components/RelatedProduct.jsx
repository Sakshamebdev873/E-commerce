import React, { useEffect, useState } from "react";
import Title from '../Components/Title'
import Productitem from './Productitem'
import { useGlobalContext } from "../Context/ShopContext";
const RelatedProduct = ({ category, subcategory }) => {
  const { products } = useGlobalContext();
  const [related,setrelated] = useState([])
  useEffect(() => {
    if (products.length > 0) {
        let productcopy = products.slice();
        productcopy = productcopy.filter((item)=> item.category === category );
        productcopy = productcopy.filter((item) => item.subCategory === subcategory);
        setrelated(productcopy.slice(0,5))
    }
  }, []);
  return (
    <>
      <div className="my-20"> 
        <div className="text-center my-4 text-2xl">
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {related.map((item,index)=>{
                return <Productitem id={item._id} name={item.name} image={item.image} price={item.price} key={index}/>
            })}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
