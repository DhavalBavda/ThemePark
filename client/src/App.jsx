import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App ()  {
  return (
    <div>
    <Router>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>

    </Router>
    </div>
  )
}
export default App;
