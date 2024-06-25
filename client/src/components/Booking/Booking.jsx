import '../../App'
import React from 'react'
import '../../../public/lib/animate/animate.css';
import '../../../public/lib/lightbox/css/lightbox.min.css';
import '../../../public/lib/owlcarousel/owl.carousel.min.css';
import '../../../public/css/bootstrap.min.css';
import axios from 'axios'
import { useState } from 'react';


const Booking = () => {

    const [CustomerName, setCustomerName] = useState()
    const [MobileNo, setMobileNo] = useState()
    const [Email, setEmail] = useState()
    const [Packages, setPackages] = useState()
    const [NumberOfMember, setNumberOfMember] = useState()
    const [TransactionID, setTransactionID] = useState()
    const [TicketPerPerson, setTicketPerPerson] = useState()
    const [TotalPayment, setTotalPayment] = useState()
    const [Claimed, setClaimed] = useState()
    const [Date, setDate] = useState()
    const [PaymentStatus, setPaymentStatus] = useState()


    const Submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4500/UserRegistraion',{PaymentStatus,Date,Claimed,TotalPayment,TicketPerPerson,TransactionID,NumberOfMember,CustomerName,MobileNo,Email,Packages})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    return (

        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-0">
                    <div className="col-1">
                        <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                    </div>
                    <div className="col-10">
                        <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div className="text-center">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Book Us</small>
                                <h1 className="display-5 mb-5">Where you want Our Services</h1>
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
                                    <select className="form-select border-primary p-2" aria-label="Default select example" onChange={(e) => setPackages(e.target.value)}>
                                        <option selected>Select Package</option>
                                        <option value="None">None</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Platinum">Platinum</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>Number Of Member</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="0" onChange={(e) => setNumberOfMember(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>Ticket Per Person</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="/-" onChange={(e) => setTicketPerPerson(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>Total Payment</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="/-" onChange={(e) => setTotalPayment(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>Claimed</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="Full Address" onChange={(e) => setClaimed(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>Date</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="25/06/2024" onChange={(e) => setDate(e.target.value)} />
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <label>PaymentStatus</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="Success" onChange={(e) => setPaymentStatus(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label>TransactionID</label>
                                    <input type="text" className="form-control border-primary p-2" placeholder="123456789" onChange={(e) => setTransactionID(e.target.value)} />
                                </div>


                                {/* <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select Country</option>
                                        <option value="1">USA</option>
                                        <option value="2">UK</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value="1">Depend On Country</option>
                                        <option value="2">UK</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label className=''>Name</label>
                                    <select className="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select Palace</option>
                                        <option value="1">Depend On Country</option>
                                        <option value="2">UK</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Small Event</option>
                                        <option value="1">Event Type</option>
                                        <option value="2">Big Event</option>
                                        <option value="3">Small Event</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select Type Food</option>
                                        <option value="1">Vegetarian</option>
                                        <option value="2">Non-Vegetarian</option>
                                        <option value="3">Mix Food</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" placeholder="Full Address" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" placeholder="Phone" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" placeholder="Email" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" placeholder="Message" />
                                </div>*/}
                                <div className="col-lg-4 col-md-6">
                                    <button className="btn btn-primary p-2 w-100">Submit</button>
                                </div> 
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Booking



