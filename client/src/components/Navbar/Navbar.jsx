import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

function Navbar() {

  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <h1>Amusement_Logo </h1>
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-link'>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>Contact</Link>
            </li>

            <div className="d-flex justify-content-end">
  <Link to="/signUp" className="btn btn-primary">Sign Up</Link>
</div>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar