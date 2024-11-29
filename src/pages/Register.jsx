import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = { name, email, password };
      await axios
        .post("https://password-reset-backend-4dnh.onrender.com/api/auth/register", payload)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
      setEmail("");
      setPassword("");
      setName("");
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
        <div className='border-black border flex justify-center m-32 p-20 w-[400px]'>
          <d iv className='grid gap-5'>
            <h1 className='flex justify-center text-2xl font-bold '>Register Form</h1>
             <form className="gird" onSubmit={handleSubmit}>
        <p className="flex justify-center m-3">
          <label htmlFor="name"></label>
          <input
          className="border w-[300px] h-8 border-black"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your FullName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email"></label>
          <input className="border w-[300px] h-8 border-black m-3"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password"></label>
          <input className="border w-[300px] h-8 border-black m-3"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      <div className='flex justify-center m-3'>
      <button className='border border-black h-10 rounded-md font-bold hover:bg-red-600 hover:text-white w-28' type="submit">Register</button>
      </div>
      
      </form>
      <div className='flex justify-center'>
      Already Have An Account ?
      <button className='underline'>
        <Link to={"/login"}> Login </Link>
      </button>
      </div>
      
     </d>
     </div>
     </div>
        </>
    );
};

export default Register;