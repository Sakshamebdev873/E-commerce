import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { search, setsearch, showsearch, setshowsearch } = useGlobalContext();
  const [visible,setvisible] = useState(false)
  const location = useLocation();
  useEffect(() => {
    if(location.pathname.includes('collection') && showsearch){
      setvisible(true)
      // console.log('i am clicked')
    }else{
      setvisible(false)
    }
    // console.log(location);
  }, [location]);
  return showsearch && visible ? (
    <div className="text-center bg-gray-100 border ">
      <div className=" inline-flex  justify-center items-center pt-2 pb-2 ">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          className="border-gray-50 rounded-lg h-7 px-8 "
        />
        <img
          src={assets.search_icon}
          alt={assets.search_icon}
          className="w-6 cursor-pointer  bg-white border-r-0"
        />
      </div>
      <img
        onClick={() => {
          setshowsearch(false);
        }}
        src={assets.cross_icon}
        alt={assets.cross_icon}
        className="inline-flex mx-4  w-5 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
