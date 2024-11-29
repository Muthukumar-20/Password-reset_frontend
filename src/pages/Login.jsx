import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("https://password-reset-backend-4dnh.onrender.com/api/auth/login", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
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
          <div className='grid gap-5'>
            <h1 className='flex justify-center text-2xl font-bold '>Login</h1>
            <form className='grid gap-5 ' onSubmit={handleSubmit}>
              <p className='flex justify-center '>
                <label className='' htmlFor="email"></label>
                <input className='border w-[300px] h-8 border-black '
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Id"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className="flex justify-center">
                <label htmlFor=""></label>
                <input className='border border-black h-8  w-[300px]'
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <div className='flex justify-center'>
                <button className='border border-black rounded-md w-32 h-10 font-bold hover:bg-red-600 hover:text-white' type="submit">Login</button>
              </div>
            </form>

            <div className='flex justify-center'>
              <p>  Don't Have An Account ?</p>
              <button className='underline'>


                <Link to={"/register"}> Register</Link>


              </button>
             
            </div>
            <button className='underline'>
                <Link to={"/forgetpassword"}>Forgot Password</Link>
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;