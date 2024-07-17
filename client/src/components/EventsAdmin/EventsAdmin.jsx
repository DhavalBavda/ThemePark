import React, { useEffect, useState } from 'react';
import '../../../public/lib/animate/animate.css';
import '../../../public/lib/lightbox/css/lightbox.min.css';
import '../../../public/lib/owlcarousel/owl.carousel.min.css';
import '../../../public/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const EventAdmin = () => {

    const [EventName, setEventName] = useState('');
    const [EventDescription, setEventDescription] = useState('');
    const [EventDate, setEventDate] = useState('');
    const [EventTime, setEventTime] = useState('');
    const [EventPrice, setEventPrice] = useState('');
    const [Completed, setCompleted] = useState('');
    const [Events, setEvents] = useState([]);

    const [selectedEvent, setSelectedEvent] = useState(null);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('EventName', EventName);
        formData.append('EventDescription', EventDescription);
        formData.append('EventDate', EventDate);
        formData.append('EventTime', EventTime);
        formData.append('EventPrice', EventPrice);
        formData.append('Completed', Completed);

        axios.post('http://localhost:4500/AddEvent', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                axios.get('http://localhost:4500/ShowEvents')
                    .then(result => setEvents(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('http://localhost:4500/ShowEvents')
            .then(result => setEvents(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (eve) => {
        setSelectedEvent(eve);
        setEventName(eve.EventName);
        setEventDescription(eve.EventDescription);
        setEventDate(eve.EventDate);
        setEventTime(eve.EventTime);
        setEventPrice(eve.EventPrice);
        setCompleted(eve.Completed);
        setShow(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('EventName', EventName);
        formData.append('EventDescription', EventDescription);
        formData.append('EventDate', EventDate);
        formData.append('EventTime', EventTime);
        formData.append('EventPrice', EventPrice);
        formData.append('Completed', Completed);

        axios.put(`http://localhost:4500/EditEventDeatils/${selectedEvent._id}`, formData)
            .then(result => {
                // console.log(result);
                handleClose();
                // Reload the events after editing
                axios.get('http://localhost:4500/ShowEvents')
                    .then(result => setEvents(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };
    const handleDelete = (ticketId) => {
        try {
            axios.delete(`http://localhost:4500/DeleteEvent/${ticketId}`);
            setEvents(prevEvents => prevEvents.filter(eve => eve._id !== ticketId));
        } catch (error) {
            console.error('Error deleting event:', error);
        }

    }
    return (
        <>
            <div className="row">
                <Navbar1 />
                <div className="col-2">

                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-dark text-light p-4 rounded" style={{ backdropFilter: 'blur(10px)', opacity: 0.85 }}>
                                    <h3 className="mb-4">Manage Events</h3>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Event Name</th>
                                                <th>Event Description</th>
                                                <th>Event Date</th>
                                                <th>Event Time</th>
                                                <th>Event Price</th>
                                                <th>Completed</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Events.map((eve, index) => (
                                                <tr key={eve._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{eve.EventName}</td>
                                                    <td>{eve.EventDescription}</td>
                                                    <td>{eve.EventDate}</td>
                                                    <td>{eve.EventTime}</td>
                                                    <td>{eve.EventPrice}</td>
                                                    <td>{eve.Completed}</td>
                                                    <td>
                                                        <Button variant="success" onClick={() => handleShow(eve)}>
                                                            Edit
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={() => handleDelete(eve._id)}
                                                            className='btn btn-danger'>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 mt-5">
                            <div className="col-12">
                                <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                    <div className="text-center">
                                        <h1 className="display-5 mb-5">Add New Event</h1>
                                    </div>
                                    <form onSubmit={Submit} encType="multipart/form-data">
                                        <div className="row g-4 form">
                                            <div className="col-lg-6 col-md-6">
                                                <label>Event Name</label>
                                                <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventName(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Event Description</label>
                                                <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventDescription(e.target.value)} />
                                            </div><div className="col-lg-6 col-md-6">
                                                <label>Event Date</label>
                                                <input type="Date" className="form-control border-primary p-2"  onChange={(e) => setEventDate(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Event Time</label>
                                                <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventTime(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Event Price</label>
                                                <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventPrice(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Completed</label>
                                                <input type='text' className="form-control border-primary p-2" placeholder="Yes or No" onChange={(e) => setCompleted(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="m-4 col-lg-6 col-md-6">
                                            <button className="btn btn-primary p-2 w-100">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Event</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleEditSubmit} encType="multipart/form-data">
                                <div className="row g-4 form">
                                    <div className="col-lg-6 col-md-6">
                                        <label>Event Name</label>
                                        <input type="text" className="form-control border-primary p-2" value={EventName}  onChange={(e) => setEventName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Event Description</label>
                                        <input type="text" className="form-control border-primary p-2" value={EventDescription}  onChange={(e) => setEventDescription(e.target.value)} />
                                    </div><div className="col-lg-6 col-md-6">
                                        <label>Event Date</label>
                                        <input type="Date" className="form-control border-primary p-2" value={EventDate} onChange={(e) => setEventDate(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Event Time</label>
                                        <input type="text" className="form-control border-primary p-2" value={EventTime}  onChange={(e) => setEventTime(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Event Price</label>
                                        <input type="text" className="form-control border-primary p-2" value={EventPrice}  onChange={(e) => setEventPrice(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Completed</label>
                                        <input type='text' className="form-control border-primary p-2" value={Completed}  onChange={(e) => setCompleted(e.target.value)} />
                                    </div>
                                </div>
                                <div className="justify-content-center m-4 col-lg-6 col-md-6">
                                    <button className="btn btn-primary p-2 w-100" type="submit">Save Changes</button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default EventAdmin;
