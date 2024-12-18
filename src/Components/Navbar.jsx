import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const {setshowsearch,showsearch,getcartcount} = useGlobalContext();
  return (
    <div className="flex justify-between items-center px-9 pt-1">
      <Link to={'/'}><img src={assets.logo} alt={assets.logo} className="w-36 h-10" /></Link>
      <ul className="hidden sm:flex text-sm text-gray-600 gap-5">
        <NavLink to="/">
          <p>Home</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/collection">
          <p>Collection</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] border-none hidden" />
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=> setshowsearch(!showsearch)}
          src={assets.search_icon}
          alt={assets.search_icon}
          className="w-5 cursor-pointer transition-all ease-in"
        />
        <Link to={'/login'} className="group relative">
          <img
            src={assets.profile_icon}
            alt={assets.profile_icon}
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden bg-slate-100 text-gray-500 rounded absolute dropdown-menu right-0 pt-4 px-5 py-2 w-36 text-sm">
            <p className="cursor-pointer hover:text-black ">My profile</p>
            <p className="cursor-pointer hover:text-black ">Orders</p>
            <p className="cursor-pointer hover:text-black ">Logout</p>
          </div>
        </Link>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt={assets.cart_icon}
            className="w-5 cursor-pointer"
          />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getcartcount()}
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          alt={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar functionality */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-white ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-5 p-3">
            <img
              src={assets.dropdown_icon}
              alt={assets.dropdown_icon}
              className="h-4 rotate-180 cursor-pointer"
              onClick={() => setvisible(false)}
            />
            <p>Back</p>
          </div>
          <NavLink
            to={"/"}
            onClick={() => setvisible(false)}
            className={`border pt-2 pl-3 cursor-pointer`}
          >
            Home
          </NavLink>
          <NavLink
            to={"/collection"}
            onClick={() => setvisible(false)}
            className={`border pt-2 pl-3 cursor-pointer`}
          >
            Collection
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setvisible(false)}
            className={`border pt-2 pl-3 cursor-pointer`}
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setvisible(false)}
            className={`border pt-2 pl-3 cursor-pointer`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
