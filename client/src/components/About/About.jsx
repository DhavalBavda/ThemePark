import React from 'react'
import '../style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import Navbar1 from '../Navbar/Navbar';

import 'animate.css/animate.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import { useEffect, useRef } from 'react';
import counterUp from 'counterup2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import teamimage from '../../assets/images/teamimage.jpg'
import RidesAttract from '../Ride_Attract/RideAttract';

const About = ({showNavbar = true}) => {

    const countersRef = useRef([]);
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        countersRef.current.forEach(counter => {
            counterUp(counter, {
                duration: 2000,
                delay: 10,
            });
        });

        new WOW().init();
    }, []);

    const handleVideoClick = (src) => {
        setVideoSrc(src);
        const modal = new bootstrap.Modal(document.getElementById('videoModal'));
        modal.show();

    };

    const teamMembers = [
        {
            name: "Harsh Ajay",
            position: "Decoration Chef",
            imgSrc: teamimage,
            delay: "0.1s"
        },
        {
            name: "Dhaval S Bavda",
            position: "Executive Chef",
            imgSrc: teamimage,
            delay: "0.3s"
        },
        {
            name: "Aagam Shah",
            position: "Kitchen Porter",
            imgSrc: teamimage,
            delay: "0.5s"
        },
        {
            name: "Laxit Khanpara",
            position: "Head Chef",
            imgSrc: teamimage,
            delay: "0.7s"
        },
        {
            name: "Rutvik Padhara",
            position: "Head Chef",
            imgSrc: teamimage,
            delay: "0.7s"
        },
    ];

    return (
        <div>
            {showNavbar && <Navbar1 />}

            <div className="container-fluid py-6">
                <Container>
                    <Row className="g-5 align-items-center">
                        <Col lg={5} className="wow bounceInUp" data-wow-delay="0.1s">
                            <img src="" className="img-fluid rounded" alt="About Us" />
                        </Col>
                        <Col lg={7} className="wow bounceInUp" data-wow-delay="0.3s">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">About Us</small>
                            <h1 className="display-5 mb-4">Trusted By 200 + satisfied clients</h1>
                            <p className="mb-4">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                            <Row className="g-4 text-dark mb-5">
                                <Col sm={6}>
                                    <i className="fas fa-share text-primary me-2"></i>Fresh and Fast food Delivery
                                </Col>
                                <Col sm={6}>
                                    <i className="fas fa-share text-primary me-2"></i>24/7 Customer Support
                                </Col>
                                <Col sm={6}>
                                    <i className="fas fa-share text-primary me-2"></i>Easy Customization Options
                                </Col>
                                <Col sm={6}>
                                    <i className="fas fa-share text-primary me-2"></i>Delicious Deals for Delicious Meals
                                </Col>
                            </Row>
                            <Button variant="primary" className="py-3 px-5 rounded-pill">About Us<i className="fas fa-arrow-right ps-2"></i></Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Fact start */}
            <div className="container-fluid faqt py-6">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-users fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" ref={el => countersRef.current[0] = el}>689</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" ref={el => countersRef.current[1] = el}>107</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Expert Chefs</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-check fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" ref={el => countersRef.current[2] = el}>253</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Events Complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="video">
                                <button type="button" className="btn btn-play" onClick={() => handleVideoClick('https://www.youtube.com/embed/DWRcNpR6Kdc')}>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Video */}
                <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src={videoSrc} id="video" allowFullScreen allow="autoplay; encrypted-media"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fact end */}

            <RidesAttract/>

            {/* Team Members start */}
            {showNavbar && <div className="container-fluid team py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Team</small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div>
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className={`col-lg-3 col-md-6 wow bounceInUp`} data-wow-delay={member.delay}>
                                <div className="team-item rounded">
                                    <img className="img-fluid rounded-top" src={member.imgSrc} alt={member.name} />
                                    <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                        <h4 className="text-primary">{member.name}</h4>
                                        <p className="text-white mb-0">{member.position}</p>
                                    </div>
                                    <div className="team-icon d-flex flex-column justify-content-center m-4">
                                        <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href="#">
                                            <FontAwesomeIcon icon={faShareAlt} />
                                        </a>
                                        <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>}
            {/* Team Members end */}

        </div>
    )

}
export default About
