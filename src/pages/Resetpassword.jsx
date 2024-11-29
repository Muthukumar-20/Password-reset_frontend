import React from 'react';
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpassword = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { id, token } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios
        .post(`https://password-reset-backend-4dnh.onrender.com/api/auth/reset-password/${id}/${token}`, {
          password,
        })
        .then((res) => {
          toast.success(res.data.message);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
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
        <button type="submit">Update  </button>
      </form>   

        </div>

        </div>
     
          
        </>
    );
};

export default Resetpassword;
