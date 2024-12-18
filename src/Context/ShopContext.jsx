import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = "$";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartitems, setcartitems] = useState({});
  const addtocart = async (itemid, size) => {
    let cartData = structuredClone(cartitems);
    // cartitems is a state variable initialized as an empty object ({}). This will hold the cart data, where keys are item IDs and values are objects representing sizes and their quantities.
    // structuredClone creates a deep copy of cartitems. This ensures that changes are made to a new copy, preserving the immutability of the original state.
    if (!size) {
      toast.error("Please select size");
      return;
    }
    if (cartData[itemid]) {
      if (cartData[itemid][size]) {
        cartData[itemid][size] += 1;
      } else {
        cartData[itemid][size] = 1;
      }
    } else {
      cartData[itemid] = {};
      cartData[itemid][size] = 1;
    }
    setcartitems(cartData);
  };
  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartitems) {
      // The for...in loop iterates over the enumerable properties (keys) of the cartitems object. Here, items represents the keys of cartitems.
      for (const item in cartitems[items]) {
        // or each items key, another for...in loop is used to iterate over the properties (items) of cartitems[items]. Here, item represents the keys of cartitems[items].
        try {
          if (cartitems[items][item] > 0) {
            totalcount += cartitems[items][item];
          }
        } catch (error) {
          toast.error("please select size");
        }
      }
    }
    return totalcount;
  };

  //   useEffect(() => {
  // console.log(cartitems);
  //   }, [cartitems]);
  const cartamount = () => {
    let totalamount = 0;
    for (const itemid in cartitems) {
      const iteminfo = products.find((item) => item._id === itemid);
      for (const items in cartitems[itemid]) {
        try {
          if (cartitems[itemid][items] > 0) {
            totalamount += iteminfo.price * cartitems[itemid][items];
            // console.log(totalamount)
          }
        } catch (error) {
          toast.error("please add product to cart");
        }
      }
    }
    return totalamount;
  };
  const updatequantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartitems);
    cartData[itemId][size] = quantity;
    // console.log(cartData);
    setcartitems(cartData);
  };
  return (
    <ShopContext.Provider
      value={{
        products,
        cartamount,
        currency,
        updatequantity,
        delivery_fee,
        search,
        setsearch,
        showsearch,
        setshowsearch,
        cartitems,
        addtocart,
        getcartcount,
        navigate,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ShopContext);
};
