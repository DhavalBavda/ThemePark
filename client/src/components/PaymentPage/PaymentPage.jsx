import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingData = location.state;
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        const bookingDatas = {
            ...bookingData,
            cardNumber,
            expiryDate,
            cvc
        }
        navigate('/Ticket', { state: bookingDatas });
    };

    return (
        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-0 justify-content-center">
                    <div className="col-1">
                        <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                    </div>
                    <div className="col-10 col-md-8 col-lg-6">
                        <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div className="text-center">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Payment Details</small>
                                <h1 className="display-5 mb-5">Payment🔒</h1>
                            </div>
                            <form onSubmit={handlePaymentSubmit}>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <label>Customer Name</label>
                                        <input type="text" className="form-control border-primary p-2" value={bookingData.CustomerName} readOnly />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Mobile No</label>
                                        <input type="text" className="form-control border-primary p-2" value={bookingData.MobileNo} readOnly />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Packages</label>
                                        <input type="text" className="form-control border-primary p-2" value={bookingData.Packages} readOnly />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Number Of Members</label>
                                        <input type="text" className="form-control border-primary p-2" value={bookingData.NumberOfMember} readOnly />
                                    </div>
                                    <div className="col-12">
                                        <label>Total Payment</label>
                                        <input type="text" className="form-control border-primary p-2" value={bookingData.TotalPayment} readOnly />
                                    </div>
                                    <div className="col-12">
                                        <label>Card Number</label>
                                        <input type="text" className="form-control border-primary p-2" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Expiration Date</label>
                                        <input type="text" className="form-control border-primary p-2" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>CVC</label>
                                        <input type="text" className="form-control border-primary p-2" placeholder="xxx" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button type="submit" className="btn btn-primary p-2 w-100">Submit Payment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
