"use client"
import React from 'react';
import CartCounter from './CartCounter';
import { useAppContext } from './ContextProvider';
import Image from 'next/image';

 function ShoppingCart() {
    const {cart, setCart} = useAppContext();

 
  function handleDelete(i){
    cart.splice(i, 1);
    setCart([...cart]);
  }

  const total = cart.reduce((acc, product)=> 
    acc = acc + product.totalPrice, 0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 max-w-4xl mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
      
        <div className="space-y-6">
          {cart.map((product, index)=>

              <div key={index} className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md ">
                    <div className='flex justify-content-between gap-5 items-center'>
                      <Image  width={400} height={400}  src={product.image} alt="Product" className="w-24 h-24 rounded-lg"/>
                      <div>
                      <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                      <p className="text-gray-500 ">Rs. {product.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <CartCounter product={product}/>
                      <button onClick={()=> handleDelete(index)} className="text-red-500 border border-red-500 rounded-full w-8 h-8 flex items-center justify-center">X</button>
                    </div>
              </div>
          )}
            

          <div className="text-xl font-bold text-gray-800">Total: {total}</div>
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Proceed to Checkout</button>
        </div>
    
    </div>
  );
}
export default ShoppingCart;