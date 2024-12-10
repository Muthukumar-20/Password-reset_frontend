import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("https://password-reset-backend-4dnh.onrender.com/api/auth/forget-password", { email });
      toast.success("Email sent successfully!");
      navigate("/login");
    } catch (error) {
     console.log(error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); 
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
          <form className='' onSubmit={handleSubmit}>
            <div className='flex justify-center'>
              <p className='font-bold text-xl pb-20'>Forget password</p>
            </div>
            <p>
              <label htmlFor="email">Email:</label>
              <input
                className='border border-black h-8 w-[300px]'
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <div className='flex justify-center pt-10'>
              {isLoading ? (
                <button className='disabled:opacity-50 border border-black rounded-md w-32 h-10 font-bold hover:bg-red-600 hover:text-white' type="submit">
                  Sending...
                </button>
              ) : (
                <button className='border border-black rounded-md w-32 h-10 font-bold hover:bg-red-600 hover:text-white' type="submit">
                  Send
                </button>
              )}
        </div>
        
      </form>   
      </div>
      </div>
        </>
    );
};

export default Forgetpassword;



