import React, { useState } from 'react';
import '../style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'
import '../../../public/lib/lightbox/css/lightbox.min.css'
import '../../../public/lib/owlcarousel/owl.carousel.min.css'
import Navbar1 from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Services = ({ showNavbar = true, showFooter = true }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { icon: 'fa-ticket-alt', title: 'Ticket Booking', para: 'plan your adventure online and Enjoy', delay: '0.5s', description: 'Book your tickets in advance to skip the lines and enjoy more time on the rides.' },
    { icon: 'fa-calendar-alt', title: 'Venue Bookings', para: 'Unlock the thrills on the Active Events', delay: '0.7s', description: 'Host your events and parties at our exciting venue, perfect for any occasion.' },
    { icon: 'fa-utensils', title: 'Food Menu', para: 'Tasty meals that give you energy for the rides.', delay: '0.1s', description: 'Indulge in delicious food and drinks to fuel your adventure at the park.' },
    { icon: 'fa-medal', title: 'Silver Package', para: 'Get more thrills with our premium package', delay: '0.3s', description: 'The Silver Package includes entry fee and access to water park activities.' },
    { icon: 'fa-crown', title: 'Gold Package', para: 'Treat yourself to the best of the best.', delay: '0.5s', description: 'The Gold Package includes entry fee, water park access, and up to 5 adventurous rides.' },
    { icon: 'fa-gem', title: 'Platinum Package', para: 'Experience the park like a true VIP.', delay: '0.7s', description: 'The Platinum Package includes entry fee, food, stay, water park activities, all adventurous rides, and pre-parking slot booking.' },
    { icon: 'fa-users', title: 'Family Package', para: 'Make memories together with our family deal', delay: '0.1s', description: 'The Family Package includes entry fee, food, stay, water park access, all family and kids rides, and up to 5 adventurous rides.' },
    { icon: 'fa-graduation-cap', title: 'Student Package', para: 'Discounted tickets to keep the adventure alive', delay: '0.3s', description: 'The Student Package includes entry fee and access to 2 rides from each section and water park rides.' },
  ];

  const toggleModal = (service) => {
    setSelectedService(service);
    setShowModal(!showModal);
  };

  return (
    <div>
      {showNavbar && <Navbar1 />}
      <div className="container-fluid service py-6">
        <div className="container">
          <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Services</small>
            <h1 className="display-5 mb-5">What We Offer</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className={`col-lg-3 col-md-6 col-sm-12 wow bounceInUp`} data-wow-delay={service.delay} key={index}>
                <div className="bg-light rounded service-item">
                  <div className="service-content d-flex align-items-center justify-content-center p-4">
                    <div className="service-content-icon text-center">
                      <i className={`fas ${service.icon} fa-7x text-primary mb-4`}></i>
                      <h4 className="mb-3">{service.title}</h4>
                      <p className="mb-4">{service.para}</p>
                      <button className="btn btn-primary px-4 py-2 rounded-pill" onClick={() => toggleModal(service)}>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showFooter && <Footer />}

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedService?.title}</h5>
                <button type="button" className="close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <i className={`fas ${selectedService?.icon} fa-7x text-primary mb-4`}></i>
                <p>{selectedService?.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;