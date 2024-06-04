import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const LandingPage = () => {
  return (
    <>
      <div id="main">
        <div id="box1"></div>

        <div id="box2">
          <div id="text">
            <span className="color1">Amusem</span><span className="color2">ent</span><br />
            <span className="color1">Park</span>
          </div>
        </div>

        <div id="box3">
          <div id="container">
            <div id="logo">
              {/* Make sure to import your amusement park image and set the src attribute */}
              <img src="" alt="Amusement Park" />
            </div>

            <div id="menu">
              <ul className="nav">
                {/* Use Link components from react-router-dom for client-side routing */}
                <li className="nav-item">
                  <a className="nav-link" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">ABOUT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default LandingPage