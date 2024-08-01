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

const AdminParkFeedback = () => {

    const [ParkFeedback, setParkFeedback] = useState([]);

    axios.get('http://localhost:4500/ShowFeedBack')
        .then(result => setParkFeedback(result.data))
        .catch(err => console.log(err))

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
                                    <h3 className="mb-4">Manage Food</h3>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Feedback</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ParkFeedback.map((feedbacks, index) => (
                                                <tr key={feedbacks._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{feedbacks.FeedBack}</td>
                                                    <td>
                                                        <Button style={{width:"fit-content"}}
                                                            onClick={() => handleDelete(feedbacks._id)}
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminParkFeedback
