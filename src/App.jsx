import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgetpassword from './pages/Forgetpassword';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';


const App = () => {
    return (
        <>
        <div>
            <ToastContainer/>
        </div>
         <BrowserRouter>
         <Routes>
<Route path='/' element={<Home/>} /> 
<Route path='/register' element={<Register/>} /> 
<Route path='/login' element={<Login/>} />
<Route path='/resetpassword/:id/:token' element={<Resetpassword/>} />
<Route path='/forgetpassword' element={<Forgetpassword/>} />
         </Routes>
         </BrowserRouter>   
        </>
    );
};

export default App;