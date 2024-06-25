// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './Navbar.css';
// import menuicon from "../../../public/image/menu-icon.png"
// import Logo from "../../../public/image/Logo.png"

// function Navbar() {

  

//   return (
//     <div>
//       <nav className='navbar'>
//         <div className='nav-logo'>
//           <Link to='/' className='navbar-brand'>
//             <img src={Logo} alt="logo"></img>
//             <h1>Amusment Park</h1>
//           </Link>
//         </div>
//         <div className="nav-content">
//           <ul>
//             <li>
//               <Link to="/" className='nav-linktag'>Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className='nav-linktag'>About</Link>
//             </li>
//             <li>
//               <Link to="/services" className='nav-linktag'>Services</Link>
//             </li>
//             <li>
//               <Link to="/contact" className='nav-linktag'>Contact</Link>
//             </li>
//             <li className='nav-linktag-btn'>
//               <Link to="/contact" className='nav-linktag'>Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="icon"><img src={menuicon} alt="" /></div>
//       </nav>
//     </div>
//     // <div>
//     //   <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//     //     <div className='container-fluid'>
//     //       <Link to='/' className='navbar-brand'>
//     //         <img src="image/logo.png" alt="logo" className='logostyle'></img>
//     //         <h1>Amusment Park</h1>
//     //       </Link>
//     //       <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
//     //         <span className='navbar-toggler-icon'></span>
//     //       </button>
//     //       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//     //         <div className="navbar-nav ms-auto p-4 p-lg-0">
//     //           <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
//     //             <li className='nav-item'>
//     //               <Link to='/' className='nav-link active' aria-current='page'>Home</Link>
//     //             </li>
//     //             <li className='nav-item'>
//     //               <Link to='/about' className='nav-link'>About</Link>
//     //             </li>
//     //             <li className='nav-item'>
//     //               <Link to='/services' className='nav-link'>Services</Link>
//     //             </li>
//     //             <li className='nav-item'>
//     //               <Link to='/contact' className='nav-link'>Contact</Link>
//     //             </li>

//     //             <div className="d-flex justify-content-end">
//     //               <Link to="/signUp" className="btn btn-primary">Sign Up</Link>
//     //             </div>
//     //           </ul>
//     //         </div>

//     //       </div>
//     //     </div>
//     //   </nav>
//     // </div>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import '../style.css';
import { faBars, faEnvelope, faBell, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar1 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container-fluid nav-bar">
            <Container>
                <Navbar expand="lg" className="py-4">
                    <Navbar.Brand as={Link} to="/">
                        <h1 className="text-primary fw-bold mb-0">Cater<span className="text-dark">Serv</span></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse">
                        {/* <span className="fa fa-bars text-primary"></span> */}
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" className="nav-item nav-link active">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-item nav-link">About</Nav.Link>
                            <Nav.Link as={Link} to="/service" className="nav-item nav-link">Services</Nav.Link>
                            <Nav.Link as={Link} to="/event" className="nav-item nav-link">Events</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-item nav-link">Contact</Nav.Link>
                        </Nav>
                        <Button variant="primary" className="py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</Button>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            {/* <Modal show={show} onHide={handleClose} className="modal-fullscreen">
                <Modal.Header closeButton>
                    <Modal.Title>Search by keyword</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center">
                    <Form className="w-75 mx-auto d-flex">
                        <Form.Control type="search" className="bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                        <Button variant="outline-primary" id="search-icon-1" className="p-3">
                            <i className="fa fa-search"></i>
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> */}
        </div>
    );
}

export default Navbar1;
