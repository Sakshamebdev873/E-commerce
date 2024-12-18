import React from "react";
import { useGlobalContext } from "../Context/ShopContext";
import Title from "../Components/Title";
const Orders = () => {
  const { products, currency } = useGlobalContext();
  return (
    <>
      <div className="flex flex-col mt-7 px-6">
        <div className="text-2xl font-medium">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <hr className="border-[1px] border-gray-200" />
        <div className="flex flex-col justify-center items-center gap-3">
          {products.slice(1, 4).map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex justify-between gap-2 w-full border-b-[2px]">
                  <div className="flex items-center gap-x-4 gap-y-2 mt-4">
                  <p>
                    <img
                      src={item.image[0]}
                      alt={item.image[0]}
                      className="w-16"
                    />
                  </p>
                  <div className="flex flex-col gap-x-2">
                    <p>{item.name}</p>
                    <div className="flex gap-x-4">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantity : 1</p>
                      <p>Size : M</p>
                    </div>
                    <span>
                      Date : <span className="text-base">25 August,2024</span>
                    </span>
                  </div>
                  
                  </div>
                  <div className="flex  gap-x-2 items-center justify-center">
          <p className="h-2.5 w-2.5 rounded-full bg-green-400"></p>
          <p className="text-base">Ready to Ship</p>
        </div>
        <div className="flex items-center">
          <button type="button" className="bg-transparent border border-gray-200 text-black rounded-sm px-2">Track Order</button>
        </div>
                </div>
              </>
            );
          })}
        </div>
        
      </div>
    </>
  );
};

export default Orders;
