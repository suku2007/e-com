"use client"
import { faEyeSlash, faEye  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function page(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[openPassword, setOpenPassword] = useState(false);
    const[submitted, setSubmitted] = useState(false);
    const[error, setError] = useState("");

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function togglePassword(){
        setOpenPassword(!openPassword);
    }
    function validateForm(){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email === emailFormat){
            setError("Invalid")


        }
    }


   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
             <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                type={openPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={openPassword ? faEye : faEyeSlash} onClick={togglePassword} style={{ marginLeft: '-1.5rem', cursor: 'pointer' }}
                />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default page;