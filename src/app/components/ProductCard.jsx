"use client"; 
import Image from "next/image";
import { useAppContext } from "./ContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart} from '@fortawesome/free-solid-svg-icons'


function ProductCard({product}){

    const {cart, setCart, wishlist, setWishlist} = useAppContext();
 
    function handleAddProduct(product){  
        const existingProduct = cart.find((item)=> item.id == product.id);
        if(existingProduct){
            const indexofexistingProduct = cart.indexOf(existingProduct);
            existingProduct.quantity = existingProduct.quantity + 1;
            existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
            cart[indexofexistingProduct] = existingProduct;
            setCart([...cart]);
        }else{            
            product.quantity = 1;
            product.totalPrice = product.price * product.quantity;
            setCart([...cart, product]);
        }
    }

    function handleClick(product){
        const wishedProduct = wishlist.find(sentProduct => sentProduct.id == product.id);
        
        if(wishedProduct){
            const indexOfWishedProduct = wishlist.indexOf(wishedProduct);
            wishlist.splice(indexOfWishedProduct, 1);
            setWishlist([...wishlist]);

        }else{
            setWishlist([...wishlist, product]);
        }
    }
    
    function getColor(product){
      const wishedProduct = wishlist.find(sentProduct => sentProduct.id == product.id);
      if(wishedProduct){
        return "red";
      }else{
        return "blue";
      }
        
    }
    
    return(
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden">
        <Image width={400} height={400} src={product.image} alt="Product Name" className="w-full  object-cover"/>
        <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name} </h2>
            {/* <p className="text-gray-500">{product.description} </p> */}
            <p className="text-gray-600">Price:<span className="text-red-600"> Rs {product.price}</span></p>
            <p className="text-gray-600">Customer Rating: <span className="text-red-600">{product.customerRating} / 5</span></p>
            <p className="text-gray-600">Discount: <span className="text-red-600">{product.discount}%</span></p>
            <div className="flex gap-1">
            <button onClick={()=> handleAddProduct(product)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 grow">Add to Cart</button> 
            <button onClick={()=> handleClick(product)} className={`mt-4 bg-${getColor(product)}-500 text-white py-2 px-4 rounded-lg hover:bg-${getColor(product)}-600`}><FontAwesomeIcon icon={faHeart}/></button>
            </div>
        </div>
        </div>
    );
}
export default ProductCard;