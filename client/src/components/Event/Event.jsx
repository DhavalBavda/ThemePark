import Navbar1 from '../Navbar/Navbar'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '../Footer/Footer';
 

const EventItem = ({ src, category, lightbox }) => (
  <div className="col-md-6 col-lg-3">
    <div className="event-img position-relative">
      <img className="img-fluid rounded w-100" src={src} alt="" />
      <div className="event-overlay d-flex flex-column p-4">
        <h4 className="me-auto">{category}</h4>
        <a href={src} data-lightbox={lightbox} className="my-auto">
          <i className="fas fa-search-plus text-dark fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

const Event = ({showNavbar = true}) => {
  return (
    <div>
      {showNavbar && <Navbar1/>}
      <div className="container-fluid event py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Latest Events
          </small>
          <h1 className="display-5 mb-5">Our Social & Professional Events Gallery</h1>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
            <li className="nav-item p-2">
              <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                <span className="text-dark" style={{ width: '150px' }}>All Events</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                <span className="text-dark" style={{ width: '150px' }}>Wedding</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                <span className="text-dark" style={{ width: '150px' }}>Corporate</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                <span className="text-dark" style={{ width: '150px' }}>Cocktail</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                <span className="text-dark" style={{ width: '150px' }}>Buffet</span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <EventItem src="/image/Event_image/event-1.jpeg" category="Wedding" lightbox="event-1" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Corporate" lightbox="event-2" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Wedding" lightbox="event-3" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Buffet" lightbox="event-4" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Cocktail" lightbox="event-5" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Wedding" lightbox="event-6" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Buffet" lightbox="event-7" />
                <EventItem src="/image/Event_image/event-1.jpeg" category="Corporate" lightbox="event-8" />
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <EventItem src="img/event-1.jpg" category="Wedding" lightbox="event-8" />
                <EventItem src="img/event-2.jpg" category="Wedding" lightbox="event-9" />
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <EventItem src="img/event-3.jpg" category="Corporate" lightbox="event-10" />
                <EventItem src="img/event-4.jpg" category="Corporate" lightbox="event-11" />
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-4">
                <EventItem src="img/event-5.jpg" category="Cocktail" lightbox="event-12" />
                <EventItem src="img/event-6.jpg" category="Cocktail" lightbox="event-13" />
              </div>
            </div>
            <div id="tab-5" className="tab-pane fade show p-0">
              <div className="row g-4">
                <EventItem src="img/event-7.jpg" category="Buffet" lightbox="event-14" />
                <EventItem src="img/event-8.jpg" category="Buffet" lightbox="event-15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Event



