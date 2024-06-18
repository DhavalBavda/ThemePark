import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' />
        </Routes>

      </Router>
    </div>
  )
}
export default App;
