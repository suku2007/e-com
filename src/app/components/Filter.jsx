import React from "react";

const Filter = () => {
  return (
    <div className="bg-gray-100 p-6  flex items-center justify-center ">
      <div className="max-w-lg bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="flex flex-wrap justify-between ">
            {/* Customer Review Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Customer Review</h3>
            <div className="space-y-2">
                {["4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Star & Up"].map((label, index) => (
                <label key={index} className="flex items-center">
                    <input type="radio" name="review" className="mr-2" />
                    {label}
                </label>
                ))}
            </div>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="space-y-2">
                {["Under $25", "$25 to $50", "$50 to $100", "$100 & Above"].map((label, index) => (
                <label key={index} className="flex items-center">
                    <input type="radio" name="price" className="mr-2" />
                    {label}
                </label>
                ))}
            </div>
            </div>

            {/* Discount Filter */}
            <div className="mb-4">
            <h3 className="font-semibold mb-2">Discount</h3>
            <div className="space-y-2">
                {["10% Off or More", "20% Off or More", "30% Off or More", "50% Off or More"].map((label, index) => (
                <label key={index} className="flex items-center">
                    <input type="radio" name="discount" className="mr-2" />
                    {label}
                </label>
                ))}
            </div>
            </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
