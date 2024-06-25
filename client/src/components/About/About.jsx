import React from 'react'
import '../style.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { faBars, faEnvelope, faBell, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
  return (
<div className="container-fluid py-6">
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={5} className="wow bounceInUp" data-wow-delay="0.1s">
                        <img src={aboutImage} className="img-fluid rounded" alt="About Us" />
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
  )
}

export default About
