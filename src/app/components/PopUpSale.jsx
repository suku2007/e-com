import { useState } from "react";

function PopUpSale() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(false);
  }

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-700/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={handleClick}>
          X
        </button>

         <img src="/images/3.jpg" alt="Product" className="w-full h-40 object-cover rounded-md"/>

        <h2 className="text-xl font-bold mt-4">Special Sale!</h2>
        <p className="text-gray-600 mt-2">
          Get up to <span className="text-red-500 font-bold">50% OFF</span> on our latest collection.
        </p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default PopUpSale;
