import React, { useEffect, useState } from 'react'
import Navbar1 from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ClimedTicket = () => {
    const [Tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/ShowAllTickets')
            .then(result => setTickets(result.data))
            .catch(err => console.log(err));

    }, []);
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
                                    <h3 className="mb-4">Available Packages</h3>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Ticket Id</th>
                                                <th>Customer Name</th>
                                                <th>Mobile No</th>
                                                <th>PaymentStatus</th>
                                                <th>Total Member</th>
                                                <th>Date</th>
                                                <th>Claimed</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Tickets.map((Ticket, index) => (
                                                <tr key={Ticket._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{Ticket.TicketId}</td>
                                                    <td>{Ticket.CustomerName}</td>
                                                    <td>{Ticket.MobileNo}</td>
                                                    <td>{Ticket.PaymentStatus}</td>
                                                    <td>{Ticket.NumberOfMember}</td>
                                                    <td>{Ticket.Date}</td>
                                                    <td>
                                                        {Ticket.Claimed === 'Claimed' && (
                                                            <button className='btn btn-warning'>
                                                                Claimed
                                                            </button>
                                                        )}
                                                        {Ticket.Claimed === 'Pending' && (
                                                            <Link to={`/TicketClaimed/${Ticket._id}`} className='btn btn-success'>
                                                                Pending
                                                            </Link>
                                                        )}
                                                        {Ticket.Claimed === 'Canceled' && (
                                                            <button className='btn btn-danger'>
                                                                Canceled
                                                            </button>
                                                        )}
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

export default ClimedTicket