"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

function page(){
const [products, setProducts] = useState ([]);
    useEffect(()=>{
        getProducts()

    }, []);

    async function getProducts(){
        const fetchingData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
        const res = await fetchingData.json();
        setProducts(res);
    }

    return(
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Product Listings</h1>
                <Link className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" href="/admin/products/add">
                Add Product
                </Link>
            </div>
            <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
                <table className="min-w-full bg-white text-left text-sm text-gray-700">
                <thead className="bg-gray-50 border-b text-xs font-semibold text-gray-600 uppercase">
                    <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Stock</th>
                    <th className="px-6 py-3">Reviews</th>
                    <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                    <tr className="border-b hover:bg-gray-50" key={index}>
                    <td className="px-6 py-4">{product.id}</td>
                    <td className="px-6 py-4">
                        <div>
                        <div className="font-medium text-gray-800">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.description}</div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div>
                        <div className="text-sm font-semibold text-gray-700">{product.category.name}</div>
                        <div className="text-xs text-gray-500">{product.category.description}</div>
                        </div>
                    </td>
                    <td className="px-6 py-4">₹{product.price}</td>
                    <td className="px-6 py-4">
                        <span className="text-green-600 font-semibold">{product.stock}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">No reviews</td>
                    <td className="px-6 py-4">
                        <Link href={`/admin/products/${product.id}`} className="text-blue-600 hover:underline mr-2">Edit</Link>
                        <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                    </tr>
                    )}
                    
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default page;