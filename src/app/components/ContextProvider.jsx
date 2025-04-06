"use client"; 
import { createContext, useContext, useState } from "react";
import { products as dataProduct } from "../data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [products, setProducts] = useState(dataProduct) 
    const [productPrice, setProductPrice] = useState('');
    const [productDiscount, setProductDiscount] = useState(0);
    const [productRating, setProductRating] = useState(0);

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
