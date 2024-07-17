import React, { useState } from 'react';
import '../style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'
import '../../../public/lib/lightbox/css/lightbox.min.css'
import '../../../public/lib/owlcarousel/owl.carousel.min.css'
import '../../../public/image/Rides_Image/bumpercar_card.jpg'
import '../../../public/image/Rides_Image/Deep_Space_ride.jpeg'
import '../../../public/image/Rides_Image/Cyclone_ride.jpeg'
import '../../../public/image/Rides_Image/Skyfall_ride.jpeg'
import '../../../public/image/Rides_Image/Twister_ride.jpeg'
import '../../../public/image/Rides_Image/Butterfly_ride.jpeg'
import '../../../public/image/Rides_Image/Flash_Tower_ride.jpeg'
import '../../../public/image/Rides_Image/Lazy_river_ride.jpeg'
import '../../../public/image/Rides_Image/Wavepool_ride.jpeg'
import '../../../public/image/Rides_Image/Pendulum_ride.jpeg'
import '../../../public/image/Rides_Image/Splash_ride.jpeg'
import Navbar1 from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Feedback from '../Feedback/Feedbackcard.jsx';


const RidesAttract = ({ showNavbar = true, showFooter = true }) => {


    // ========fetch data dynamic=====
    const [Ridesdata, setRidesData] = useState([]);
    const [RideFeeedback, setRideFeedback] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:4500/ShowRide')
            .then(result => setRidesData(result.data))
            .catch(error => console.error('Error fetching data:', error));

        axios.get('http://localhost:4500/ShowRideFeedBack')
            .then(result=>setRideFeedback(result.data))
            .catch(error=>console.error('Error Fetching Feedback Data',error))
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedRide, setSelectedRide] = useState(null);

    const toggleModal = (ride) => {
        setSelectedRide(ride);
        setShowModal(!showModal);
    };

    const navigate = useNavigate();

    const handleWriteReviewClick = () => {
        navigate('/ride-form');
    };


    return (
        <div>
            {showNavbar && <Navbar1 />}

            <div className="container-fluid service py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Attraction</small>
                        <h1 className="display-5 mb-5">Rides We Have</h1>
                    </div>
                    <div className="row g-4">
                        {Ridesdata.map((attraction, index) => (
                            <div className={`col-lg-3 col-md-6 col-sm-12 wow bounceInUp`} data-wow-delay={attraction.delay} key={index}>
                                <div className="bg-light rounded service-item">
                                    <div className="service-content d-flex align-items-center justify-content-center p-4">
                                        <div className="service-content-icon text-center">
                                            {attraction.RideImage && <img src={`http://localhost:4500/${attraction.RideImage}`} alt="" className="img-fluid mb-4" />}
                                            <h4 className="mb-3">{attraction.RideName}</h4>
                                            <div className="d-flex justify-content-center mb-4">
                                                <i className="fas fa-star text-warning mr-1"></i>
                                                <span className="font-weight-bold">{attraction.Rating}</span>
                                            </div>
                                            <p className="mb-4">{attraction.Para}</p>
                                            <button className="btn btn-primary px-4 py-2 rounded-pill" onClick={() => toggleModal(attraction)}>Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedRide?.title}</h5>
                                <button type="button" className="close" onClick={toggleModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={`http://localhost:4500/${selectedRide.RideImage}`} alt={selectedRide?.RideName} className="img-fluid mb-4" />
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fas fa-star text-warning mr-1"></i>
                                    <span className="font-weight-bold">{selectedRide?.Rating}</span>
                                    {/* <span className="text-muted ml-2">(Reviews)</span> */}
                                </div>
                                <p>{selectedRide?.para}</p>
                                <h5 className="mb-3">Additional Details:</h5>
                                <ul>
                                    {selectedRide.RideDescription}
                                    {/* {selectedRide?.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))} */}
                                </ul>

                                {/* <h5 className="mb-3">Reviews:</h5>
                                {selectedRide?.reviews.map((review, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <h6 className="mr-2">{review.name}</h6>
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-star text-warning mr-1"></i>
                                                <span className="font-weight-bold">{review.rating}</span>
                                            </div>
                                        </div>
                                        <p>{review.comment}</p>
                                    </div>
                                ))} */}
                            </div>
                            <div className="text-center">
                                <button
                                    className="btn btn-primary px-3 py-2 rounded-pill"
                                    style={{ fontSize: '16px' }}
                                    onClick={handleWriteReviewClick}
                                >
                                    Write a Review
                                </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                                    Close
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <Feedback/>

            {/* {selectedRide && (
        <RideForm ride={selectedRide} onSubmit={() => setSelectedRide(null)} />
      )} */}

            {/* {selectedRide && (
  <RideForm ride={selectedRide} Ridess={Ridess} onSubmit={() => setSelectedRide(null)} />
)} */}

            {showFooter && <Footer />}
        </div>
    );
};

export default RidesAttract;