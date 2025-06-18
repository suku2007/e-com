"use client"
import { useState, useEffect } from "react";

function Form({onFormSubmit, data}){
    const [formData, setFormData] = useState({});
    const[submitted, setSubmitted] = useState(false);

    useEffect(()=>{
        if(data){
            setFormData(data);
        }
    },[data])

    function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value });
  }
    function showError(inputType){
        if(formData[inputType]?.toString().length > 0){
          return false;
        }else{
          return `Please enter ${inputType}.`;
        }
   }

   const nameError = showError('name');
   const priceError = showError('price');
   const stockError = showError('stock');

    async function submitForm(e){
        e.preventDefault();
        setSubmitted(true);
        if(!nameError && !priceError && !stockError){
            onFormSubmit(formData);
        }
    }
    
    return(
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={submitForm}>
        {/* Product Name */}
        <div className="col-span-1">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="name">Product Names</label>
          <input type="text" name="name" value={formData?.name ?? ''} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" 
            />
        {(nameError && submitted) && <p className="text-red-600">{nameError}</p>}
        </div>


        {/* Price */}
        <div className="col-span-1">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="price">Price</label>
          <input type="number" step="0.01" name="price" value={formData?.price ?? ''} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" />
            {(priceError && submitted) && <p className="text-red-600">{priceError}</p>}
        </div>

        {/* Stock */}
        <div className="col-span-1">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="stock">Stock</label>
          <input type="number" name="stock" value={formData?.stock ?? ''} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" />
          {(stockError && submitted) && <p className="text-red-600">{stockError}</p>}
        </div>

        {/* Category */}
        <div className="col-span-1">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="category">Category</label>
          <select id="category" name="category"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="1">Electronics</option>
            <option value="2">Fashion</option>
            <option value="3">Home Appliances</option>
          </select>
        </div>

        {/* Description spans both columns */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="description">Description</label>
          <textarea name="description" rows="3" value={formData?.description ?? ''} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"/>
        </div>

        {/* Submit Button spans both columns */}
        <div className="col-span-1 md:col-span-2 pt-4">
          <button type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            Save Product
          </button>
        </div>
      </form>
    );
}
export default Form;