import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Resetpassword = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {stringtoken } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`https://password-reset-backend-4dnh.onrender.com/api/auth/reset-password/${stringtoken}`, { password });
        const message = res?.data?.message || "Password reset successful!";
        toast.success(message); 
        navigate("/login");
      } catch (error) {
        console.error("API Error:", error);
        const errorMessage = error?.response?.data?.message ?? "An error occurred during password reset."; // Provide a fallback message if not in the error response.
        toast.error(errorMessage);
      }
    };


    return (
        <>
          <header className='fixed w-[100%]'>
                <img src="./image/flat-design-forest-landscape_23-2149155031.avif" alt="" />
                <nav className='justify-end flex h-16 border-b-2 pr-14 pt-3 font-bold text-white bg-red-500'>
                   <div className='space-x-8'>
                   <a href="#" className=''>Home</a>
                    <a href="#" className=''>About</a>
                    <a href="#" className=''>Contect</a>
                    <a href="#" className=' \'>Services</a>
                    <button className='border border-black h-10 w-24 rounded-md  hover:text-[#162938] hover:bg-white'>Login</button>
                   </div>
                </nav>
            </header>

        <div className='flex justify-center'>
        <div className='border-black border flex justify-center m-32 p-20 w-[400px] rounded-md'>
        <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"} password
          </button>
        </p>
        <br></br>
        <div className='flex justify-center pt-10'>
              {isLoading ? (
                <button className='disabled:opacity-50 border border-black rounded-md w-32 h-10 font-bold hover:bg-red-600 hover:text-white' type="submit">
                  Updating...
                </button>
              ) : (
                <button className='border border-black rounded-md w-32 h-10 font-bold hover:bg-red-600 hover:text-white' type="submit">
                  Update
                </button>
              )}
        </div>
      </form>   

        </div>

        </div>
     
          
        </>
    );
};

export default Resetpassword;
