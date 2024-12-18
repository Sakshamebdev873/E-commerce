import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Cartitems from "../Components/Cartitems";
const Cart = () => {
  const { products, currency, cartitems, updatequantity,navigate } = useGlobalContext();
  const [cartData, setcartData] = useState([]);
  useEffect(() => {
    let tempData = [];
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        if (cartitems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartitems[items][item],
          });
        }
      }
    }
    setcartData(tempData);
  }, [cartData]);
  return (
  <>
    <div className=" flex flex-col px-10 border-t pt-9 ml-6">
      <div className="text-2xl ">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const cartcopy = products.find((items) => items._id === item._id);
          // console.log(cartcopy)
          return (
            <>
              <div
                key={index}
                className="mt-5 py-4 border-t border-gray-400 flex flex-col justify-center"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={cartcopy.image[0]}
                    alt={cartcopy.image}
                    className="w-1/6"
                  />
                  <div className=" flex gap-4 flex-col text-2xl font-medium">
                    <p>{cartcopy.name}</p>
                    <p className="text-xl font-normal">
                      {currency}
                      {cartcopy.price}
                    </p>
                    <p className="border-gray-400 w-10 bg-gray-200 text-center text-[12px]">
                      {item.size}
                    </p>
                    <input on onChange={(e)=> {e.target.value === '' || e.target.value === '0' ? 'null' : updatequantity(item._id,item.size,Number(e.target.value))}}
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className="border w-10 text-[12px] border-gray-400 bg-gray-200 text-center"
                    />
                  </div>
                  <img
                    onClick={() => updatequantity(item._id, item.size, 0)}
                    src={assets.bin_icon}
                    alt={assets.bin_icon}
                    className="w-6 cursor-pointer flex gap-10"
                  />
                </div>
              </div>
              </>  
          );
        })}
      </div>
    </div>
    <div className="w-[60%] flex px-[60px] mt-5">
      <Cartitems/>
    </div>
    </>
  );
};

export default Cart;
