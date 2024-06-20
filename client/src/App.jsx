import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Payment from './components/Payment/Payment';
function App ()  {
  return (
    <div>
    <Router>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Payment' element={<Payment/>}/>

    </Routes>

    </Router>
    </div>
  )
}
export default App;
