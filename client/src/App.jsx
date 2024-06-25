import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Payment from './components/Payment/Payment';
import Booking from './components/Booking/Booking';
import Ticket from './components/Ticket/Ticket';

function App ()  {
  return (
    <div>
    <Router>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/BookTicket' element={<Booking/>}/>
      <Route path='/Ticket' element={<Ticket/>}/>



    </Routes>

    </Router>
    </div>
  )
}
export default App;
