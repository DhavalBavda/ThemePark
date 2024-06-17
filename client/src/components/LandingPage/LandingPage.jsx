import React from 'react'
import './LandingPage.css'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>

  );
};
export default LandingPage
