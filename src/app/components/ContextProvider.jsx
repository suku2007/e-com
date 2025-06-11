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
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
 
// wishlist localStorage
    useEffect(()=>{
      const lsWishedProducts = localStorage.getItem("wishedProducts")
      const lsCartProducts = localStorage.getItem("cartProducts")
      const lsUser = localStorage.getItem("user")
      const lsToken = localStorage.getItem("token")

      const storagedWishedProducts = JSON.parse(lsWishedProducts || '[]')
      const storagedCartProducts = JSON.parse(lsCartProducts || '[]')
      const storagedUser = JSON.parse(lsUser || '{}')

      setWishlist(storagedWishedProducts);
      setCart(storagedCartProducts);
      setUser(storagedUser);
      setToken(lsToken);
    }, [])

    useEffect(()=>{
      localStorage.setItem("wishedProducts", JSON.stringify(wishlist))
      localStorage.setItem("cartProducts", JSON.stringify(cart))
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token)

    }, [wishlist, cart, token, user])

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
    setProductRating,
    user, 
    setUser,
    token,
    setToken
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
