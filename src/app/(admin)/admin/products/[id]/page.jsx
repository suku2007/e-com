"use client"
import Form from "@/app/components/admin/product/Form";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


function Page() {
  const params = useParams();
  // const [formData, setFormData] = useState({});
  const[product, setProduct] = useState({});
  

  useEffect(()=>{
    getProduct()
  }, []);

  async function getProduct(){
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${params.id}`);
    const response = await resp.json();
      setProduct(response);
  }



  async function submitForm(formData){
   
      formData.price = +formData.price;
      formData.stock = +formData.stock;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${params.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const response = await resp.json();
    
  }
  if(!parseInt(params.id)){
    return <div>Not Found</div>
  }
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Product</h2>
     <Form onFormSubmit = {submitForm} data={product}/>
    </div>
  );
}

export default Page;
