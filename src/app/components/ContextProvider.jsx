"use client"; 
import { createContext, useContext, useState } from "react";
import { products as dataProduct } from "../data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [products, setProducts] = useState(dataProduct) 

  return (
    <AppContext.Provider value={{ cart, setCart, wishlist, setWishlist, products, setProducts}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
