import ProductCard from "./ProductCard";
import { useAppContext } from "./ContextProvider";
import { useEffect } from "react";
import SearchBar from "./SearchBar";


function Project(){

      const {cart, setCart, products} = useAppContext();
  
     //LOCALSTORAGE on mount
     useEffect(()=> {
      const storage = localStorage.getItem("shoppingCart");
      const jsonStorage = JSON.parse(storage || "[]");
      setCart(jsonStorage);
    }, [])
  
    //LOCALSTORAGE on cart update
    useEffect(()=> {
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }, [cart])

    return(
      
        <>
        <div className="container mt-4"><SearchBar/></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 container mx-auto">
          {/* items in cart = {cart.length} */}
          {products.map((product, index)=> 

            <ProductCard 
              key={index} 
              product={product} 
            />
            )}

      </div>
      </>
    );
}
export default Project;