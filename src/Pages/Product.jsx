import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { ProductId } = useParams();
  const { products, currency,addtocart } = useGlobalContext();
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");
  // console.log(ProductId)
  const fetchproductdata = () => {
    products.map((item) => {
      if (item._id === ProductId) {
        setproductdata(item);
        setimage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchproductdata();
    // console.log(fetchproductdata())
  }, [ProductId, products]);
  return productdata ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productdata.image.map((item, index) => {
              return (
                <img
                  onClick={() => {
                    setimage(item);
                  }}
                  src={item}
                  alt={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={image} className="w-full h-auto " />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <div className="font-medium text-2xl gap-1 mt-2">
            <h2>{productdata.name}</h2>
            <div className="flex items-center gap-1 mt-2">
              <img
                src={assets.star_icon}
                alt={assets.star_icon}
                className="w-3"
              />
              <img
                src={assets.star_icon}
                alt={assets.star_icon}
                className="w-3"
              />
              <img
                src={assets.star_icon}
                alt={assets.star_icon}
                className="w-3"
              />
              <img
                src={assets.star_icon}
                alt={assets.star_icon}
                className="w-3"
              />
              <img
                src={assets.star_dull_icon}
                alt={assets.star_dull_icon}
                className="w-3"
              />
            </div>
            <p className="font-medium text-xl mt-2">
              {currency}
              {productdata.price}
            </p>
            <p className="font-normal text-[18px] mt-2">
              {productdata.description}
            </p>
            <div className="flex flex-col mt-4">
              <p className="text-xl font-medium">Select size</p>
              <div className="flex gap-2 mt-6">
              {productdata.sizes.map((item, index) => {
                 return <button onClick={() => {
                      setsize(item);
                    }} className={`border px-2 py-1  bg-gray-100 cursor-pointer ${ item ===size ? 'border-orange-500 ' : ''} `}
                    key={index}
                  >
                    {item}
                  </button>;
                })}
              </div>
            </div>
            <button  onClick={() => addtocart(productdata._id,size)}type="button" className="px-6 mt-4 py-2 bg-black text-[15px] text-white">Add to cart</button>
            <hr className="mt-5 sm:4/5"/>
            <div className="flex text-sm text-gray-400 flex-col gap-2 mt-4">
              <p>100% original Products</p>
              <p>Cash on delivery is avialable with this Product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 ">
        <div className="flex cursor-pointer">
          <p className="border border-gray-400 bg-white px-5 py-3">Description</p>
          <p className="border border-gray-400 bg-white px-5 py-3">Reviews(122)</p>
        </div>
        <hr  className="border-spacing-1 border-gray-400"/>
        <div className="text-[15px] gap-2  text-gray-400 flex flex-col mt-7">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nulla vel aliquam molestiae voluptas, excepturi porro reprehenderit maiores facilis ipsum atque repellat reiciendis fugiat sit laboriosam aut, unde accusamus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi eum dolorem assumenda nulla quidem itaque, libero quisquam dolorum iure neque unde vero facere. Consequatur eos dolorum tenetur. Totam, beatae.</p>
        </div>
      </div>
      <RelatedProduct category={productdata.category} subcategory={productdata.subCategory}/>
    </div>
  ) : null;
};

export default Product;
