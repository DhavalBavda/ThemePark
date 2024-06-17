import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';
import menuicon from "../../../public/image/menu-icon.png"
import Logo from "/image/logo.png"

function Navbar() {

  

  return (
    <div>
      <nav className='navbar'>
        <div className='nav-logo'>
          <Link to='/' className='navbar-brand'>
            <img src={Logo} alt="logo"></img>
            <h1>Amusment Park</h1>
          </Link>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/" className='nav-linktag'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='nav-linktag'>About</Link>
            </li>
            <li>
              <Link to="/services" className='nav-linktag'>Services</Link>
            </li>
            <li>
              <Link to="/contact" className='nav-linktag'>Contact</Link>
            </li>
            <li className='nav-linktag-btn'>
              <Link to="/contact" className='nav-linktag'>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="icon"><img src={menuicon} alt="" /></div>
      </nav>
    </div>
    // <div>
    //   <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    //     <div className='container-fluid'>
    //       <Link to='/' className='navbar-brand'>
    //         <img src="image/logo.png" alt="logo" className='logostyle'></img>
    //         <h1>Amusment Park</h1>
    //       </Link>
    //       <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    //         <span className='navbar-toggler-icon'></span>
    //       </button>
    //       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //         <div className="navbar-nav ms-auto p-4 p-lg-0">
    //           <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //             <li className='nav-item'>
    //               <Link to='/' className='nav-link active' aria-current='page'>Home</Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/about' className='nav-link'>About</Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/services' className='nav-link'>Services</Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/contact' className='nav-link'>Contact</Link>
    //             </li>

    //             <div className="d-flex justify-content-end">
    //               <Link to="/signUp" className="btn btn-primary">Sign Up</Link>
    //             </div>
    //           </ul>
    //         </div>

    //       </div>
    //     </div>
    //   </nav>
    // </div>
  )
}

export default Navbar