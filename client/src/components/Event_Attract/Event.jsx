import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css';
import './Event.css';
import Navbar1 from '../Navbar/Navbar';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventItem = ({ src, details, onClick }) => (
  <div className="col-md-6 col-lg-3">
    <div className="event-img position-relative">
      <img style={{height:"200px",width:"150px"}} className="img-fluid rounded w-100" src={src} alt={details.EventName} />
      <div className="event-overlay d-flex flex-column p-4">
        <h4 className="me-auto">{details.EventName}</h4>
      </div>
    </div>
    <button className="btn btn-primary mt-2 w-100" onClick={onClick}>More</button>
  </div>
);

const Event = ({ showNavbar = true }) => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState({ previous: [], upcoming: [] });

  useEffect(() => {
    axios.get('https://waterpark.onrender.com/ShowEvents')
      .then(result => {
        const previousEvents = result.data.filter(event => event.Completed === 'Yes');
        const upcomingEvents = result.data.filter(event => event.Completed === 'No');
        setEvents({ previous: previousEvents, upcoming: upcomingEvents });
      })
      .catch(err => console.log(err));
  }, []);

  const handleShow = (event) => {
    setSelectedEvent(event);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      {showNavbar && <Navbar1 />}
      <div className="container mt-5 events-container">
        <div className="row">
          <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              Latest Events
            </small>
            <h1 className="display-5 mb-5">Our Events </h1>
          </div>
          <div className="col-12 mb-5">
            <section className="previous-events animate__animated animate__fadeInUp">
              <h2 className="text-center">Previous Events</h2>
              <div className="row g-4">
                {events.previous.map((event, index) => (
                  <EventItem
                    key={index}
                    src={`http://localhost:4500/${event.EventImage}`}
                    details={event}
                    onClick={() => handleShow(event)}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="col-12">
            <section className="upcoming-events animate__animated animate__fadeInUp">
              <h2 className="text-center">Upcoming Events</h2>
              <div className="row g-4">
                {events.upcoming.map((event, index) => (
                  <EventItem
                    key={index}
                    src={`http://localhost:4500/${event.EventImage}`}
                    details={event}
                    onClick={() => handleShow(event)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.EventName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedEvent.EventDescription}</p>
            <p><strong>Date:</strong> {selectedEvent.EventDate}</p>
            <p><strong>Time:</strong> {selectedEvent.EventTime}</p>
            <p><strong>Price:</strong> ₹{selectedEvent.EventPrice}</p>
            <p><strong>Completed:</strong> {selectedEvent.Completed}</p>
            {selectedEvent.Completed == "No" &&
              <div>
                <br></br>
                <h2>Contact Us To Book Ticket</h2>
                <p><strong>+91 98988 05508  or  +91 98988 05509</strong></p>
              </div>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Event;
