"use client"
import { useState } from "react";
import { useAppContext } from "./ContextProvider";

function CartCounter({product}){
    const {cart, setCart} = useAppContext();

    function handleSub(){
        const findProduct = cart.find((cartProduct)=> cartProduct.id == product.id);
        findProduct.quantity = findProduct.quantity - 1;
        const indexOfProduct = cart.indexOf(findProduct);
        if(findProduct.quantity <= 0){
            cart.splice(indexOfProduct, 1);
        }
        setCart([...cart]);
    }

    function handleAdd(){
       const findProduct = cart.find((cartProduct)=> cartProduct.id == product.id);
       findProduct.quantity = findProduct.quantity + 1;
       findProduct.totalPrice = findProduct.price * findProduct.quantity;
       setCart([...cart]);
    }

    return(
        <>
            <button onClick={handleSub} className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">-</button>
            <span className="text-gray-800 font-medium">{product.quantity}</span>
            <button onClick={handleAdd} className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">+</button>
        </>
    );
}
export default CartCounter;