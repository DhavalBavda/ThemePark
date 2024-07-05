import React, { useState, useEffect } from 'react';
import '../../App';
import '../../../public/lib/animate/animate.css';
import '../../../public/lib/lightbox/css/lightbox.min.css';
import '../../../public/lib/owlcarousel/owl.carousel.min.css';
import '../../../public/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Navbar/Navbar';

const Booking = () => {
    const [CustomerName, setCustomerName] = useState('');
    const [MobileNo, setMobileNo] = useState('');
    const [Email, setEmail] = useState('');
    const [Packages, setPackages] = useState([]);
    const [SelectedPackage, setSelectedPackage] = useState('');
    const [TicketPerPerson, setTicketPerPerson] = useState('');

    const [NumberOfMember, setNumberOfMember] = useState('');
    const [TotalPayment, setTotalPayment] = useState('');
    const [Claimed, setClaimed] = useState('Pending');
    const [Dates, setDates] = useState('');
    const [TicketId, setTicketId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4500/ShowPackage')
            .then(response => {
                setPackages(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const generateTicketId = () => {
        const timestamp = Date.now().toString();
        const randomNum = Math.random().toString(36).substr(2, 5);
        return timestamp + '-' + randomNum;
    };

    const generateTransactionId = () => {
        const timestamp = Date.now().toString();
        const randomNum = Math.random().toString(36).substr(2, 5);
        return 'TXN-' + timestamp + '-' + randomNum;
    };

    const calculateTotalPayment = () => {
        const selectedPackage = Packages.find(pkg => pkg.PackageName === SelectedPackage);
        if (selectedPackage) {
            const total = Number(selectedPackage.Price) * Number(NumberOfMember);
            setTotalPayment(total);
        }
    };

    useEffect(() => {
        if (SelectedPackage && NumberOfMember) {
            calculateTotalPayment();
        }
    }, [SelectedPackage, NumberOfMember]);

    const Submit = (e) => {
        e.preventDefault();
        const generatedTicketId = generateTicketId();
        const generatedTransactionId = generateTransactionId();

        const bookingData = {
            PaymentStatus: 'Success',
            Dates,
            Claimed,
            TotalPayment,
            TransactionID: generatedTransactionId,
            NumberOfMember,
            TicketPerPerson:SelectedPackage,
            CustomerName,
            MobileNo,
            Email,
            Packages: SelectedPackage,
            TicketId: generatedTicketId
        };

        axios.post('http://localhost:4500/UserRegistraion', bookingData)
            .then(result => {
                console.log(result);
                navigate('/Payment', { state: bookingData });
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Navbar1 />
            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-1">
                            <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                        </div>
                        <div className="col-10">
                            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                <div className="text-center">
                                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Book Us</small>
                                    <h1 className="display-5 mb-5">Book Now🥳</h1>
                                </div>
                                <form onSubmit={Submit}>
                                    <div className="row g-4 form">
                                        <div className="col-lg-4 col-md-6">
                                            <label>Customer Name</label>
                                            <input type="text" className="form-control border-primary p-2" placeholder="Full Address" onChange={(e) => setCustomerName(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Mobile No</label>
                                            <input type="text" className="form-control border-primary p-2" placeholder="Full Address" onChange={(e) => setMobileNo(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Email</label>
                                            <input type="text" className="form-control border-primary p-2" placeholder="Full Address" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Packages</label>
                                            <select className="form-select border-primary p-2" aria-label="Default select example" onChange={(e) => setSelectedPackage(e.target.value)}>
                                                <option selected>Select Package</option>
                                                {Packages.map(pkg => (
                                                    <option key={pkg._id} value={pkg.PackageName}>{pkg.PackageName} Price:{pkg.Price}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Number Of Members</label>
                                            <input type="text" className="form-control border-primary p-2" placeholder="0" onChange={(e) => setNumberOfMember(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Total Payment</label>
                                            <input type="text" className="form-control border-primary p-2" value={TotalPayment} readOnly />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label>Dates</label>
                                            <input type="Date" className="form-control border-primary p-2" placeholder="25/06/2024" onChange={(e) => setDates(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 mt-5 col-md-6">
                                            <button className="btn btn-primary p-2 w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-1">
                            <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
