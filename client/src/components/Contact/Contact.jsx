import React, { useEffect, useRef } from 'react'
import Navbar1 from '../Navbar/Navbar'
import WOW from 'wow.js';
import dhavalimage from '../../assets/images/dhavalimage.jpg'
import harshimage from '../../assets/images/harshimage.jpg'
import aagimage from '../../assets/images/aagimage.png'
import laximage from '../../assets/images/laximage.png'
import rutimage from '../../assets/images/rutimage.png'


const Contact = ({ showNavbar = true }) => {

  const countersRef = useRef([]);
  useEffect(() => {
    countersRef.current.forEach(counter => {
      counterUp(counter, {
        duration: 2000,
        delay: 10,
      });
    });

    new WOW().init();
  }, []);

  const teamMembers = [
    {
      name: "Harsh Ajay",
      position: "Frontend Developer",
      imgSrc: harshimage,
      delay: "0.1s",
    },
    {
      name: "Dhaval S Bavda",
      position: "Backend Developer",
      imgSrc: dhavalimage,
      delay: "0.3s",
    },
    {
      name: "Aagam Shah",
      position: "Frontend Developer",
      imgSrc: aagimage,
      delay: "0.5s",
    },
    {
      name: "Laxit Khanpara",
      position: "Backend Developer",
      imgSrc: laximage,
      delay: "0.7s",
    },
    {
      name: "Rutvik Padhara",
      position: "ML Expert",
      imgSrc: rutimage,
      delay: "0.7s",
    },
  ];

  return (
    <div>
      {showNavbar && <Navbar1 />}
      <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Get in touch</small>
                <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="mb-4">
                  Feel free to contact us for any type of queries regarding the park
                </p>
                <form>
                  <input type="text" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                  <input type="email" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email" />
                  <textarea className="w-100 form-control mb-4 p-3 border-primary bg-light" rows="4" placeholder="Your Message"></textarea>
                  <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Address</h4>
                      <p>Amusement Park
                        near Waghodia Road, Vadodara, Gujarat 390019</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-2">info@amusementpark.com</p>
                      <p className="mb-0">support@amusementpark.com</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-2">(+91) 76767 67676</p>
                      <p className="mb-0">(+91) 98989 89898</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNavbar && <div className="container-fluid team py-6">
        <div className="container">
          <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Team</small>
            <h1 className="display-5 mb-5">Our Tech Team</h1>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className={`col-lg-2 col-md-3 col-sm-4 wow bounceInUp d-inline-block`} data-wow-delay={member.delay}>
                <div className="team-item rounded">
                  <img className="img-fluid rounded-top" style={{height:"250px", width:"300px"}} src={member.imgSrc} alt={member.name} />
                  <div className="team-content text-center py-3 bg-dark rounded-bottom">
                    <h4 className="text-primary">{member.name}</h4>
                    <p className="text-white mb-0">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Contact
