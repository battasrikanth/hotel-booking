
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import "./index.css";  // Styles will be applied automatically
import Navbar from './components/Navbar';
import "./App.css";
import Signup from './components/Signup';
import Rooms from './components/Rooms';

import Room from './components/Room';
import BookingSuccess from './components/BookingSuccess';
import Payment from './components/Payment';
import UserBookings from './components/UserBookings'
import VendorRoomForm from './components/VenderRoomForm';

import { UserProvider } from './context/UserContext';
import CustomerSignup from './components/CustomerSignup';
import VenderSignup from './components/VenderSignup';
import AdminSignup from './components/AdminSignup';
import UpdateCustomer from './components/UpdateProfile';

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <div style={{width:'100%', zIndex:'8000' }} ><Navbar/></div>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path="/payment/:amount" element={<Payment />} />
    <Route path="/booking-success" element={<BookingSuccess/>} />
    <Route path="/vendor-form-filling/:vendorId" element={<VendorRoomForm/>} />
    <Route path="/user-bookings" element={<UserBookings/>  } />
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup/>}>
    <Route index element={<CustomerSignup/>}></Route>
    <Route path='vendorsignup' element={<VenderSignup></VenderSignup>}/>
    <Route path='customersignup' element={<CustomerSignup/>}/>
    <Route path='adminsignup' element={<AdminSignup/>}/>
    </Route>
    <Route path='room/:roomId' element={<Room />}/>
    </Routes>
    <UpdateCustomer/>
   </BrowserRouter>
   </UserProvider>
  );
}

export default App;
