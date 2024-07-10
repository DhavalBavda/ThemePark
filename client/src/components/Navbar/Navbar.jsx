import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../public/image/Logo.png";
import './Navbar.css';

const Navbar1 = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';

    return (
        <div className="container-fluid nav-bar">
            <Container>
                <Navbar expand="lg" className="py-4">
                    <img src={Logo} className="img-fluid rounded-end" style={{ objectFit: 'cover', height: '50px', width: '50px' }} alt="logo"></img>
                    <Navbar.Brand as={Link} to="/">
                        <h1 className="text-primary fw-bold mb-0">Amusment<span className="text-dark">Park</span></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse">
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/ride" className={isActive('/ride')}>Rides</Nav.Link>
                            <Nav.Link as={Link} to="/services" className={isActive('/services')}>Services</Nav.Link>
                            <Nav.Link as={Link} to="/events" className={isActive('/events')}>Events</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={isActive('/contact')}>Contact</Nav.Link>
                        </Nav>
                        <Nav.Link as={Link} to="/AdminLogin" variant="primary" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Admin Login</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Navbar1;
