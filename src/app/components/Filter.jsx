"use client"
import React from "react";
import {  useEffect} from "react";
import { products as dataProducts } from "../data"; 
import { useAppContext } from "./ContextProvider";

var priceFilters = [
  {label: "Under Rs 5000", minPrice: 0, maxPrice: 5000}, 
  {label: "Rs 10000 to 20000", minPrice: 10000, maxPrice: 20000 }, 
  {label: "Rs 40000 to 50000", minPrice: 40000, maxPrice: 50000},
  {label: "Rs 60000 Above", minPrice: 60000, maxPrice: Infinity}
];

var discountFilters = [
  {label: "10% Off or More", value: 10}, 
  {label: "20% Off or More", value: 20 }, 
  {label: "30% Off or More", value: 30},
  {label: "50% Off or More", value: 50}
];

var ratingFilters = [
  {label: "4 Stars & Up", value: 4}, 
  {label: "3 Stars & Up", value: 3 }, 
  {label: "2 Stars & Up", value: 2},
  {label: "1 Star & Up", value: 1}
];
const Filter = () => {


   const {setProducts,productPrice, setProductPrice, productDiscount, setProductDiscount, productRating, setProductRating} = useAppContext();
 
  function handlePrice(e){
    setProductPrice(e.target.value);
  }
  function handleDiscount(e){
    setProductDiscount(Number(e.target.value));
  }
  function handleRating(e){
    setProductRating(Number(e.target.value));
  }
  useEffect(()=>{
    handleFilter();

  }, [productPrice, productDiscount, productRating])

  const handleFilter = () => {

    const selectedPriceFilter = productPrice?.split('-');
    const minPrice = selectedPriceFilter[0] || 0;
    const maxPrice = selectedPriceFilter[1] || Infinity;
  
    const filtered = dataProducts.filter((product) => {
      const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
      const meetsDiscount = product.discount >= productDiscount;
      const meetsRating = product.customerRating >= productRating;  
      return withinPriceRange && meetsDiscount && meetsRating;
    });
    setProducts(filtered);
    // setPopup(false);
    
    
  };
  




  return (
    <div className="bg-gray-100 p-6  flex items-center justify-center ">
      <div className="max-w-lg bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="flex flex-wrap justify-between ">
            {/* Customer Review Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Customer Rating</h3>
            <div className="space-y-2">
                {ratingFilters.map((ratingFilter, index) => (
                <label key={index} className="flex items-center">
                    <input type="radio" value={ratingFilter.value} checked={ratingFilter.value == productRating} onChange={handleRating} name="review" className="mr-2" />
                    {ratingFilter.label}
                </label>
                ))}
            </div>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="space-y-2">
                {priceFilters.map((priceFilter, index) => {
                  const priceValue = `${priceFilter.minPrice}-${priceFilter.maxPrice}`;
                return <label key={index} className="flex items-center">
                    <input type="radio" value= {priceValue} checked={priceValue == productPrice} onChange={handlePrice} name="price" className="mr-2" />
                    {priceFilter.label}
                </label>
                })}
            </div>
            </div>

            {/* Discount Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Discount</h3>
            <div className="space-y-2">
                {discountFilters.map((discountFilter, index) => (
                <label key={index} className="flex items-center">
                    <input type="radio" value={discountFilter.value} checked={discountFilter.value == productDiscount} onChange={handleDiscount} name="discount" className="mr-2" />
                    {discountFilter.label}
                </label>
                ))}
            </div>
            </div>
        </div>

        {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={handleFilter}>
          Apply Filters
        </button> */}
      </div>
    </div>
  );
};

export default Filter;
