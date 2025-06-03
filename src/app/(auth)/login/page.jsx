"use client"
import { faEyeSlash, faEye  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";


function page(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[openPassword, setOpenPassword] = useState(false);
    const[submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const router = useRouter();


    function handleEmail(e){
        setEmail(e.target.value);
        if(submitted){
          setTimeout(() => {
            validateEmail();
          }, 1000);
   
        }
    }
    function handlePassword(e){
        setPassword(e.target.value);
        if(submitted){
          setTimeout(() => {
            validatePassword();
          }, 1000);
        }
    }
    function togglePassword(){
        setOpenPassword(!openPassword);
    }
    function submitForm(e){
      e.preventDefault();
      const isPasswordValid = validatePassword();
      const isEmailValid = validateEmail();
      setSubmitted(true);
      if(isPasswordValid && isEmailValid){
        if((email == "sukanya@gmail.com") && (password == "sukanya123")){
          router.push('/admin');

        }else{
          alert("invalid credential");
          setEmail('');
          setPassword('');
        }
      }
      
       
    }

    function validateEmail(){
       const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       console.log(email);
        if(emailFormat.test(email)){
          setEmailError('');
          return true;
        }else{
          setEmailError('Please enter a valid email address.');
          return false;
        }
    }
      function validatePassword(){
        if(password.length > 6){
          setPasswordError('');
          return true;
        }else if(password.length == 0){
          setPasswordError('enter password');
           return false;
        }else{
          setPasswordError('password must be more than 6 letters');
           return false;
        }
    }


   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={submitForm}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-300">{emailError}</p>}
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
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={openPassword ? faEye : faEyeSlash} onClick={togglePassword} style={{ marginLeft: '-1.5rem', cursor: 'pointer' }}
                />
                {passwordError && <p className="text-red-300">{passwordError}</p>}

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