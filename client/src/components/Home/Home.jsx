import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import th1 from '../../assets/images/th1.jpg'
import th2 from '../../assets/images/th2.jpg'
import th3 from '../../assets/images/th3.jpg'
import th4 from '../../assets/images/th4.png'


const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-slide-duration="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={th1} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome</h5>
              <p>TO THE THEME PARK</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={th2} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore </h5>
              <p>The Adventureous Rides</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={th3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide 3</h5>
              <p>Slide 3 description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={th4} className="d-block w-100" alt="Forth slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide 4</h5>
              <p>Slide 4 description</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  )
}

export default Home