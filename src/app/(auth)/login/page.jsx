"use client"
import { faEyeSlash, faEye  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


function page(){

   const[submitted, setSubmitted] = useState(false);
   const[openPassword, setOpenPassword] = useState(false);
   const[loading, setLoading] = useState(false);
   const[formdata, setFormData] = useState({});
  
   function handleChange(e){
     setFormData({...formdata, [e.target.name]:e.target.value});
   }
    
   function showError(inputType){
      if(inputType == 'email'){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailFormat.test(formdata?.email)){
          return false;
        }else{
          return 'Please enter a valid email address.';
        }
      }else{
        if(formdata?.password?.length > 6){
          return false;
        }else if(formdata?.password?.length == 0){
          return 'enter password';
        }else{
           return 'password must be more than 6 letters';
        }
      }
   }

   const emailError = showError('email');
   const passwordError = showError('password');

  function submitForm(e){
    e.preventDefault();
    setSubmitted(true);
    if(!emailError && !passwordError){
      login();
    }
   }

   async function login(){
    setLoading(true);
      const resp = await fetch('https://ecom.zoparet.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(formdata),
      });
      const response = await resp.json();
      setLoading(false);
      if(response?.success){
        //context me user data daalenge
        toast.success("Successfully logged in.");
        //navigate karenge admin panel pe
      }else{
        toast.error(response?.message?.toString() ?? "something went wrong.");
      }
      console.log(response);
   }


   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={submitForm}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {(emailError && submitted) && <p className="text-red-600">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
             <div>
                <input
                type={openPassword ? 'text' : 'password'}
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={openPassword ? faEye : faEyeSlash} onClick={()=>setOpenPassword(!openPassword)} style={{ marginLeft: '-1.5rem', cursor: 'pointer' }}
                />
              {(passwordError && submitted) && <p className="text-red-600">{passwordError}</p>}
            </div>
          </div>
          {loading ? 
          <button
            type="button"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition">
            Loading
          </button>
           :
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Log In
          </button>
}
        </form>
        </div>
      }
      <ToastContainer />
    </div>
  );
}
export default page;