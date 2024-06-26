import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Booking from './components/Booking/Booking';
import Ticket from './components/Ticket/Ticket';
import RidePackage from './components/RidePackage/RidePackage';
import Rides from './components/Rides/Rides';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Event from './components/Event/Event';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AdminPanel from './components/AdminPanel/AdminPanel'

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/AdminLogin' element={<AdminLogin />} />

          {/* <Route path='/admin' element={<AdminPanel />} /> */}
          <Route path='/admin' element={<ProtectedRoute component={AdminPanel} />} />

          {/* <Route path='/RidePackage' element={<RidePackage />} /> */}
          <Route path='/RidePackage' element={<ProtectedRoute component={RidePackage} />} />

          {/* <ProtectedRoute path='/Rides' element={<Rides />} /> */}
          <Route path='/Rides' element={<ProtectedRoute component={Rides} />} />


          <Route path='/' element={<LandingPage />} />
          <Route path='/BookTicket' element={<Booking />} />
          <Route path='/Ticket' element={<Ticket />} />
          <Route path='/ride' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Events' element={<Event />} />
        </Routes>

      </Router>
    </div>
  )
}
export default App;
