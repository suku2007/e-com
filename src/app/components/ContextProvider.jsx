"use client"; 
import { createContext, useContext, useState, useEffect } from "react";
import { products as dataProduct } from "../data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [products, setProducts] = useState(dataProduct) 
    const [productPrice, setProductPrice] = useState('');
    const [productDiscount, setProductDiscount] = useState(0);
    const [productRating, setProductRating] = useState(0);
 
// wishlist localStorage
    useEffect(()=>{
      const lsWishedProducts = localStorage.getItem("wishedProducts")
      const lsCartProducts = localStorage.getItem("cartProducts")

      const storagedWishedProducts = JSON.parse(lsWishedProducts || '[]')
      const storagedCartProducts = JSON.parse(lsCartProducts || '[]')
      
      setWishlist(storagedWishedProducts);
      setCart(storagedCartProducts);
    }, [])

    useEffect(()=>{
      localStorage.setItem("wishedProducts", JSON.stringify(wishlist))
      localStorage.setItem("cartProducts", JSON.stringify(cart))

    }, [wishlist, cart])

    // cart localStorage



    



  return (
    <AppContext.Provider value={{ 
    cart, 
    setCart, 
    wishlist, 
    setWishlist, 
    products, 
    setProducts, 
    productPrice, 
    setProductPrice, 
    productDiscount, 
    setProductDiscount, 
    productRating, 
    setProductRating
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
