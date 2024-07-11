import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Booking from './components/Booking/Booking';
import Ticket from './components/Ticket/Ticket';
import RidePackage from './components/RidePackage/RidePackage';
import Rides from './components/Rides/Rides';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Event from './components/Event/Event';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// import AdminPanel from './components/AdminPanel/AdminPanel'
import RidesAttract from './components/Ride_Attract/RideAttract';
import Dashboard from './components/Dashboard/Dashboard';
import ClimedTicket from './components/ClimedTicket/ClimedTicket';
import PaymentPage from './components/PaymentPage/PaymentPage';
import CancellationPage from './components/CancellationPage/CancellationPage';
import RideForm from './components/Ride_Attract/RideForm';
import FoodMenus from './components/FoodMenus/FoodMenus';


function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/AdminLogin' element={<AdminLogin />} />

          {/* <Route path='/RidePackage' element={<RidePackage />} /> */}
          <Route path='/RidePackage' element={<ProtectedRoute component={RidePackage} />} />

          {/* <ProtectedRoute path='/Rides' element={<Rides />} /> */}
          <Route path='/Rides' element={<ProtectedRoute component={Rides} />} />

          <Route path='/ClimedTicket' element={<ProtectedRoute component={ClimedTicket} />} />

          <Route path='/Dashboard' element={<ProtectedRoute component={Dashboard} />} />

          <Route path='/FoodMenus' element={<ProtectedRoute component={FoodMenus} />} />

          
          <Route path='/' element={<LandingPage />} />
          <Route path='/BookTicket' element={<Booking />} />
          <Route path='/Ticket' element={<Ticket />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Events' element={<Event />} />
          <Route path='/ride' element={<RidesAttract />} />
          <Route path='/Payment' element={<PaymentPage />} />
          <Route path='/CancellationPage' element={<CancellationPage />} />
          <Route path='/ride-form' element={<RideForm/>} />

        </Routes >
      </Router >
    </div >
  )
}
export default App;
