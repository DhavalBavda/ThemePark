import React from 'react';
import '../style.css';
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'



const Hero = () => {
  return (
    <div className="container-fluid bg-light py-6 my-6 mt-0">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7 col-md-12">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to The </small>
            <h1 className="display-1 mb-4 animated bounceInDown">Amusement <span className="text-primary">Park</span></h1>
            <a href="#" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</a>
            <a href="#" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
          </div>
          <div className="col-lg-5 col-md-12">
            <img src="/image/hero.webp" className="img-fluid rounded animated zoomIn" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
