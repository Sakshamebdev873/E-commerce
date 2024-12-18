import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Productitem from "../Components/Productitem";
import Title from "../Components/Title";




const Collection = () => {
  const { products, search, showsearch } = useGlobalContext();
  const [showFilter, setshowFilter] = useState(false);
  const [showfilterproducts, setshowfilterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [Subcategory, setSubcategory] = useState([]);
  const [sortType, setsortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubCategory = (e) => {
    if (category.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (search && showsearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    // Error in website not displaying after some seconds
    if (Subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>{ return Subcategory.includes(item.subCategory)}
      );
    }
    setshowfilterproducts(productsCopy);
  };
  // const prev = x;
  const sortProduct = () => {
    let fpCopy = showfilterproducts.slice();
    switch (sortType) {
      case "low-high":
        // here a means first element b means second element
        setshowfilterproducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setshowfilterproducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    applyFilter();
    sortProduct()
  }, [category, Subcategory, search, showsearch,sortProduct]);

  // useEffect(() => {
  //   sortProduct();
  // }, [sortProduct]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mx-5">
      {/* {Filter options}  */}
      <div className="min-w-60">
        <p
          onClick={() => setshowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt={assets.dropdown_icon}
            className={` sm:hidden ml-2 w-2 ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-2 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={togglesubCategory}
              />
              Topwear
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={togglesubCategory}
              />
              Bottomwear
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={togglesubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => {
              setsortType(e.target.value);
            }}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {showfilterproducts.map((item, index) => {
            return (
              <Productitem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
