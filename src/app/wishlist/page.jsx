"use client"
import Image from "next/image";
import { useAppContext } from "../components/ContextProvider";

function Wishlist(){
        const {cart, setCart, wishlist, setWishlist} = useAppContext();
        
        function handleDelete(i){
            wishlist.splice(i, 1);
            setWishlist([...wishlist]);
        }

        function handleAddToCart(product){
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
    return(
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-5">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">My Wishlist</h1>
                {wishlist.map((product, index)=>
                    <div key={index} className="space-y-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                            <Image  width={400} height={400}  src={product.image} alt="Product" className="w-24 h-24 rounded-lg"/>
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                                <p className="text-gray-500">{product.price}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={()=> handleDelete(index)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Remove</button>
                                <button onClick={()=> handleAddToCart(product)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
    );
};
export default Wishlist;
