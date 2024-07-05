import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const CancellationPage = () => {
    const [MobileNo, setMobileNo] = useState('');
    const [tickets, setTickets] = useState([]);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [otp, setOTP] = useState('');
    const [selectedTicketId, setSelectedTicketId] = useState('');

    const handleSearchTickets = async () => {
        try {
            setShowOTPModal(true);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    const handleCancelTicket = async (ticketId) => {
        try {
            setSelectedTicketId(ticketId);
            const response = await fetch(`http://localhost:4500/TicketCancelation/${selectedTicketId}`, {
                method: 'PUT',
            });
            if (response.ok) {
                alert('Ticket successfully canceled!');
                handleSearchTickets(); // Refresh tickets list after cancellation
            } else {
                alert('Failed to cancel ticket');
            }
        } catch (error) {
            console.error('Error canceling ticket:', error);
        }
    };

    const handleOTPSubmit = async () => {
        try {
            // Assuming OTP verification logic here
            setShowOTPModal(false);
            const response = await fetch(`http://localhost:4500/ShowTickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ MobileNo }),
            });
            const data = await response.json();
            setTickets(data);
        } catch (error) {
            console.error('otp handel:', error);
        }
    };
    const formatDate = (date) => {
        const dates = new Date(date);
        const day = dates.getDate();
        const month = dates.getMonth() + 1; // Month is zero-indexed
        const year = dates.getFullYear();

        // Adjust the format according to your preference
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            {/* <div className="container"> */}
                <div className="row g-0 justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div className="text-center">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Ticket Cancellation</small>
                                <h1 className="display-5 mb-5">Cancellation ❌</h1>
                            </div>
                            <form>
                                <div className="row g-3">
                                    <div className="col-lg-8">
                                        <label>Enter Mobile Number</label>
                                        <input type="text" className="form-control border-primary p-2" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                                    </div>
                                    <div className="col-lg-4">
                                    <label>.</label>
                                        <button type="button" className="btn btn-primary p-2 w-100" onClick={handleSearchTickets}>Search Tickets</button>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Ticket ID</th>
                                                    <th>Customer Name</th>
                                                    <th>Booking Date</th>
                                                    <th>Ticket Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tickets.map(ticket => (
                                                    <tr key={ticket._id}>
                                                        <td>{ticket.TicketId}</td>
                                                        <td>{ticket.CustomerName}</td>
                                                        <td>{formatDate(ticket.createdAt)}</td>
                                                        <td>{ticket.Date}</td>

                                                        <td>{ticket.Claimed}</td>
                                                        <td>
                                                            {ticket.Claimed !== 'Canceled' ? (
                                                                <button type="button" className="btn btn-primary" onClick={() => handleCancelTicket(ticket._id)}>Cancel</button>
                                                            ) : (
                                                                ticket.Claimed === 'Claimed' ? (
                                                                    <button type="button" className="btn btn-primary">Claimed</button>
                                                                ) : (
                                                                    <button type="button" className="btn btn-danger">{ticket.Claimed}</button>
                                                                )
                                                            )}

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* OTP Modal */}
            <Modal show={showOTPModal} onHide={() => setShowOTPModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="otpInput" className="form-label">OTP</label>
                        <input type="text" className="form-control" id="otpInput" value={otp} onChange={(e) => setOTP(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowOTPModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleOTPSubmit}>
                        Submit OTP
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CancellationPage;
