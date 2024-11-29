import React from 'react';
import Login from './Login';

const Home = () => {
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
                    <Link to={"/login"}><button className='border border-black h-10 w-24 rounded-md  hover:text-[#162938] hover:bg-white'>Login</button></Link> 
                   </div>
                </nav>
            </header>
            <Login/>
        </>
    );
};

export default Home;