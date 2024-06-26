import React from 'react';
import '../style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'
import '../../../public/lib/lightbox/css/lightbox.min.css'
import '../../../public/lib/owlcarousel/owl.carousel.min.css'
import Testimonial from '../Testinomial/Testinomial';



const Services = () => {
  const services = [
    { icon: 'fa-wheelchair', title: 'Ticket Booking',para:'plan your adventure online and Enjoy', delay: '0.5s' },
    { icon: 'fa-utensils', title: 'Venue Bookings',para:'Unlock the thrills on the Active Events', delay: '0.7s' },
    { icon: 'fa-cheese', title: 'Food Menu',para:'Tasty meals that give you energy for the rides.', delay: '0.1s' },
    { icon: 'fa-pizza-slice', title: 'Silver Package',para:'Get more thrills with our premium package', delay: '0.3s' },
    { icon: 'fa-hotdog', title: 'Gold Package',para:'Treat yourself to the best of the best.', delay: '0.5s' },
    { icon: 'fa-hamburger', title: 'Platinum Package',para:'Experience the park like a true VIP.', delay: '0.7s' },
    { icon: 'fa-wine-glass-alt', title: 'Family Package',para:'Make memories together with our family deal', delay: '0.1s' },
    { icon: 'fa-walking', title: 'Student Package',para:'Discounted tickets to keep the adventure alive', delay: '0.3s' },
   
  ];

  return (
    <>
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
                    <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Testimonial/>
    </>
  );
};

export default Services;

