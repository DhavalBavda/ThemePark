import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';

function App ()  {
  return (
    <div>
    <Router>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>

    </Router>
    </div>
  )
}
export default App;
