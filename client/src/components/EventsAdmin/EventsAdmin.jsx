import React, { useEffect, useState } from 'react';
import '../../../public/lib/animate/animate.css';
import '../../../public/lib/lightbox/css/lightbox.min.css';
import '../../../public/lib/owlcarousel/owl.carousel.min.css';
import '../../../public/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const [EventImage, setEventImage] = useState(null);

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
    if (EventImage) {
      formData.append('EventImage', EventImage);
    }
    formData.append('Completed', Completed);


    axios.post('https://waterpark.onrender.com/AddEvent', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => {
        axios.get('https://waterpark.onrender.com/ShowEvents')
          .then(result => setEvents(result.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get('https://waterpark.onrender.com/ShowEvents')
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
    setEventImage(eve.EventImage);
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

    axios.put(`https://waterpark.onrender.com/EditEventDeatils/${selectedEvent._id}`, formData)
      .then(result => {
        handleClose();
        axios.get('https://waterpark.onrender.com/ShowEvents')
          .then(result => setEvents(result.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (ticketId) => {
    try {
      axios.delete(`https://waterpark.onrender.com/DeleteEvent/${ticketId}`);
      setEvents(prevEvents => prevEvents.filter(eve => eve._id !== ticketId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

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
                  <h3 className="text-center">Events Section</h3>
                  <form onSubmit={Submit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="EventName" className="form-label">Event Name</label>
                          <input type="text" className="form-control" id="EventName" placeholder="Enter Event Name" onChange={(e) => setEventName(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="EventDescription" className="form-label">Event Description</label>
                          <input type="text" className="form-control" id="EventDescription" placeholder="Enter Event Description"  onChange={(e) => setEventDescription(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="EventDate" className="form-label">Event Date</label>
                          <input type="date" className="form-control" id="EventDate"  onChange={(e) => setEventDate(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="EventTime" className="form-label">Event Time</label>
                          <input type="time" className="form-control" id="EventTime" onChange={(e) => setEventTime(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="EventPrice" className="form-label">Event Price</label>
                          <input type="text" className="form-control" id="EventPrice" placeholder="Enter Event Price"  onChange={(e) => setEventPrice(e.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">Event Image</label>
                          <input
                            type="file"
                            className="form-control"
                            id="image"
                            onChange={(e) => setEventImage(e.target.files[0])}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Completed" className="form-label">Completed</label>
                          <input type="text" className="form-control" id="Completed" placeholder="Enter Yes or No"  onChange={(e) => setCompleted(e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Event</button>
                  </form>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="bg-dark text-light p-4 rounded" style={{ backdropFilter: 'blur(10px)', opacity: 0.85 }}>
                  <h3 className="text-center">All Events</h3>
                  <Table striped bordered hover responsive variant="dark" className="table align-middle mt-3">
                    <thead>
                      <tr>
                        <th>Event Name</th>
                        <th>Event Description</th>
                        <th>Event Date</th>
                        <th>Event Time</th>
                        <th>Event Price</th>
                        <th>Event Image</th>
                        <th>Completed</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Events.map((event, index) => (
                        <tr key={index}>
                          <td>{event.EventName}</td>
                          <td>{event.EventDescription}</td>
                          <td>{event.EventDate}</td>
                          <td>{event.EventTime}</td>
                          <td>{event.EventPrice}</td>
                          <td>
                            <img src={`https://waterpark.onrender.com/${event.EventImage}`} alt={event.EventName} style={{ width: '100px', height: '100px' }}></img></td>
                          <td>{event.Completed}</td>
                          <td>
                            <div className="d-flex justify-content-between">
                              <i
                                className="fa-solid fa-pen-to-square text-primary"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleShow(event)}
                              ></i>
                              <i
                                className="fa-solid fa-trash text-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(event._id)}
                              ></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label htmlFor="EventName" className="form-label">Event Name</label>
              <input type="text" className="form-control" id="EventName" placeholder="Enter Event Name" value={EventName} onChange={(e) => setEventName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="EventDescription" className="form-label">Event Description</label>
              <input type="text" className="form-control" id="EventDescription" placeholder="Enter Event Description" value={EventDescription} onChange={(e) => setEventDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="EventDate" className="form-label">Event Date</label>
              <input type="date" className="form-control" id="EventDate" value={EventDate} onChange={(e) => setEventDate(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="EventTime" className="form-label">Event Time</label>
              <input type="time" className="form-control" id="EventTime" value={EventTime} onChange={(e) => setEventTime(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="EventPrice" className="form-label">Event Price</label>
              <input type="text" className="form-control" id="EventPrice" placeholder="Enter Event Price" value={EventPrice} onChange={(e) => setEventPrice(e.target.value)} />
            </div>
            <div className="col-lg-6 col-md-6">
              <label>Event Image:</label>
              <img src="../../../public/image/hero.webp" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
            </div>
            <div className="mb-3">
              <label htmlFor="Completed" className="form-label">Completed</label>
              <input type="text" className="form-control" id="Completed" placeholder="Enter Yes or No" value={Completed} onChange={(e) => setCompleted(e.target.value)} />
            </div>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventAdmin;






// import React, { useEffect, useState } from 'react';
// import '../../../public/lib/animate/animate.css';
// import '../../../public/lib/lightbox/css/lightbox.min.css';
// import '../../../public/lib/owlcarousel/owl.carousel.min.css';
// import '../../../public/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Navbar1 from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// const EventAdmin = () => {

//     const [EventName, setEventName] = useState('');
//     const [EventDescription, setEventDescription] = useState('');
//     const [EventDate, setEventDate] = useState('');
//     const [EventTime, setEventTime] = useState('');
//     const [EventPrice, setEventPrice] = useState('');
//     const [Completed, setCompleted] = useState('');
//     const [Events, setEvents] = useState([]);

//     const [selectedEvent, setSelectedEvent] = useState(null);

//     const [show, setShow] = useState(false);

//     const navigate = useNavigate();

//     const Submit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('EventName', EventName);
//         formData.append('EventDescription', EventDescription);
//         formData.append('EventDate', EventDate);
//         formData.append('EventTime', EventTime);
//         formData.append('EventPrice', EventPrice);
//         formData.append('Completed', Completed);

//         axios.post('https://waterpark.onrender.com/AddEvent', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(result => {
//                 console.log(result);
//                 axios.get('https://waterpark.onrender.com/ShowEvents')
//                     .then(result => setEvents(result.data))
//                     .catch(err => console.log(err));
//             })
//             .catch(err => console.log(err));
//     };

//     useEffect(() => {
//         axios.get('https://waterpark.onrender.com/ShowEvents')
//             .then(result => setEvents(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleClose = () => setShow(false);
//     const handleShow = (eve) => {
//         setSelectedEvent(eve);
//         setEventName(eve.EventName);
//         setEventDescription(eve.EventDescription);
//         setEventDate(eve.EventDate);
//         setEventTime(eve.EventTime);
//         setEventPrice(eve.EventPrice);
//         setCompleted(eve.Completed);
//         setShow(true);
//     };

//     const handleEditSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('EventName', EventName);
//         formData.append('EventDescription', EventDescription);
//         formData.append('EventDate', EventDate);
//         formData.append('EventTime', EventTime);
//         formData.append('EventPrice', EventPrice);
//         formData.append('Completed', Completed);

//         axios.put(`https://waterpark.onrender.com/EditEventDeatils/${selectedEvent._id}`, formData)
//             .then(result => {
//                 // console.log(result);
//                 handleClose();
//                 // Reload the events after editing
//                 axios.get('https://waterpark.onrender.com/ShowEvents')
//                     .then(result => setEvents(result.data))
//                     .catch(err => console.log(err));
//             })
//             .catch(err => console.log(err));
//     };
//     const handleDelete = (ticketId) => {
//         try {
//             axios.delete(`https://waterpark.onrender.com/DeleteEvent/${ticketId}`);
//             setEvents(prevEvents => prevEvents.filter(eve => eve._id !== ticketId));
//         } catch (error) {
//             console.error('Error deleting event:', error);
//         }

//     }
//     return (
//         <>
//             <div className="row">
//                 <Navbar1 />
//                 <div className="col-2">

//                     <Sidebar />
//                 </div>
//                 <div className="col-10">
//                     <div className="container mt-3">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="bg-dark text-light p-4 rounded" style={{ backdropFilter: 'blur(10px)', opacity: 0.85 }}>
//                                     <h3 className="mb-4">Manage Events</h3>
//                                     <Table striped bordered hover variant="dark">
//                                         <thead>
//                                             <tr>
//                                                 <th>No.</th>
//                                                 <th>Event Name</th>
//                                                 <th>Event Description</th>
//                                                 <th>Event Date</th>
//                                                 <th>Event Time</th>
//                                                 <th>Event Price</th>
//                                                 <th>Completed</th>
//                                                 <th>Edit</th>
//                                                 <th>Delete</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {Events.map((eve, index) => (
//                                                 <tr key={eve._id}>
//                                                     <td>{index + 1}</td>
//                                                     <td>{eve.EventName}</td>
//                                                     <td>{eve.EventDescription}</td>
//                                                     <td>{eve.EventDate}</td>
//                                                     <td>{eve.EventTime}</td>
//                                                     <td>{eve.EventPrice}</td>
//                                                     <td>{eve.Completed}</td>
//                                                     <td>
//                                                         <Button variant="success" onClick={() => handleShow(eve)}>
//                                                             Edit
//                                                         </Button>
//                                                     </td>
//                                                     <td>
//                                                         <Button
//                                                             onClick={() => handleDelete(eve._id)}
//                                                             className='btn btn-danger'>
//                                                             Delete
//                                                         </Button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </Table>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row g-0 mt-5">
//                             <div className="col-12">
//                                 <div className="border-bottom border-top border-primary bg-light py-5 px-4">
//                                     <div className="text-center">
//                                         <h1 className="display-5 mb-5">Add New Event</h1>
//                                     </div>
//                                     <form onSubmit={Submit} encType="multipart/form-data">
//                                         <div className="row g-4 form">
//                                             <div className="col-lg-6 col-md-6">
//                                                 <label>Event Name</label>
//                                                 <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventName(e.target.value)} />
//                                             </div>
//                                             <div className="col-lg-6 col-md-6">
//                                                 <label>Event Description</label>
//                                                 <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventDescription(e.target.value)} />
//                                             </div><div className="col-lg-6 col-md-6">
//                                                 <label>Event Date</label>
//                                                 <input type="Date" className="form-control border-primary p-2"  onChange={(e) => setEventDate(e.target.value)} />
//                                             </div>
//                                             <div className="col-lg-6 col-md-6">
//                                                 <label>Event Time</label>
//                                                 <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventTime(e.target.value)} />
//                                             </div>
//                                             <div className="col-lg-6 col-md-6">
//                                                 <label>Event Price</label>
//                                                 <input type="text" className="form-control border-primary p-2"  onChange={(e) => setEventPrice(e.target.value)} />
//                                             </div>
//                                             <div className="col-lg-6 col-md-6">
//                                                 <label>Completed</label>
//                                                 <input type='text' className="form-control border-primary p-2" placeholder="Yes or No" onChange={(e) => setCompleted(e.target.value)} />
//                                             </div>
//                                         </div>
//                                         <div className="m-4 col-lg-6 col-md-6">
//                                             <button className="btn btn-primary p-2 w-100">Submit</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Edit Modal */}
//                     <Modal show={show} onHide={handleClose}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Edit Event</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <form onSubmit={handleEditSubmit} encType="multipart/form-data">
//                                 <div className="row g-4 form">
//                                     <div className="col-lg-6 col-md-6">
//                                         <label>Event Name</label>
//                                         <input type="text" className="form-control border-primary p-2" value={EventName}  onChange={(e) => setEventName(e.target.value)} />
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <label>Event Description</label>
//                                         <input type="text" className="form-control border-primary p-2" value={EventDescription}  onChange={(e) => setEventDescription(e.target.value)} />
//                                     </div><div className="col-lg-6 col-md-6">
//                                         <label>Event Date</label>
//                                         <input type="Date" className="form-control border-primary p-2" value={EventDate} onChange={(e) => setEventDate(e.target.value)} />
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <label>Event Time</label>
//                                         <input type="text" className="form-control border-primary p-2" value={EventTime}  onChange={(e) => setEventTime(e.target.value)} />
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <label>Event Price</label>
//                                         <input type="text" className="form-control border-primary p-2" value={EventPrice}  onChange={(e) => setEventPrice(e.target.value)} />
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <label>Completed</label>
//                                         <input type='text' className="form-control border-primary p-2" value={Completed}  onChange={(e) => setCompleted(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="justify-content-center m-4 col-lg-6 col-md-6">
//                                     <button className="btn btn-primary p-2 w-100" type="submit">Save Changes</button>
//                                 </div>
//                             </form>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EventAdmin;
