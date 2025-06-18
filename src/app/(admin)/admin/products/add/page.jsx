"use client"

import Form from "@/app/components/admin/product/Form";


function page(){

    async function onFormSubmit(formData){
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        });
        
    }
   



    return(
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-5xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h2>
                <Form onFormSubmit={onFormSubmit}/>
        </div>

    );
}
export default page;