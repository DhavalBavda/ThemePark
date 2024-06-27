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

const RidesAttract = ({ showNavbar = true, showFooter = true }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRide, setSelectedRide] = useState(null);
    const Ridess = [
        { title: 'Deep Space', para: 'High-speed roller coaster thrill.', image: '/public/image/Rides_Image/Deep_Space_ride.jpeg', delay: '0.5s', rating: 4.8, details: ['Ride Type: Roller Coaster', 'Height Requirement: 48 inches', 'Duration: 2 minutes'] },
        { title: 'Cyclone', para: 'Classic roller coaster twists and turns.', image: '/public/image/Rides_Image/Cyclone_ride.jpeg', delay: '0.7s', rating: 4.5, details: ['Ride Type: Roller Coaster', 'Height Requirement: 42 inches', 'Duration: 3 minutes'] },
        { title: 'Twister', para: 'Gentle roller coaster for kids.', image: '/public/image/Rides_Image/Twister_ride.jpeg', delay: '0.3s', rating: 4.2, details: ['Ride Type: Roller Coaster', 'Height Requirement: 36 inches', 'Duration: 4 minutes'] },
        { title: 'Bumper Car', para: 'Classic bumper car fun and competition.', image: '/public/image/Rides_Image/bumpercar_card.jpg', delay: '0.5s', rating: 4.7, details: ['Ride Type: Bumper Cars', 'Height Requirement: None', 'Duration: 5 minutes'] },
        { title: 'Butterfly Ride', para: 'Peaceful ride for families with young children.', image: '/public/image/Rides_Image/Butterfly_ride.jpeg', delay: '0.1s', rating: 4.3, details: ['Ride Type: Gentle Ride', 'Height Requirement: 32 inches', 'Duration: 6 minutes'] },
        { title: 'Lazy River', para: 'Relaxing float for a break from excitement.', image: '/public/image/Rides_Image/Lazy_river_ride.jpeg', delay: '0.7s', rating: 4.6, details: ['Ride Type: Water Ride', 'Height Requirement: None', 'Duration: 10 minutes'] },
        { title: 'Wave Pool', para: 'Splash and play in the giant wave pool.', image: '/public/image/Rides_Image/Wavepool_ride.jpeg', delay: '0.1s', rating: 4.4, details: ['Ride Type: Water Ride', 'Height Requirement: 48 inches', 'Duration: 15 minutes'] },
        { title: 'Pendulum Ride', para: 'Adrenaline-filled swing ride for weightlessness.', image: '/public/image/Rides_Image/Pendulum_ride.jpeg', delay: '0.3s', rating: 4.9, details: ['Ride Type: Swing Ride', 'Height Requirement: 48 inches', 'Duration: 2 minutes'] },
        { title: 'Splash Water Ride', para: 'Wild water ride with splashing and spraying.', image: '/public/image/Rides_Image/Splash_ride.jpeg', delay: '0.5s', rating: 4.7, details: ['Ride Type: Water Ride', 'Height Requirement: 42 inches', 'Duration: 5 minutes'] },
        { title: 'Flash Tower', para: 'Thrilling tower ride with lightning speed drop.', image: '/public/image/Rides_Image/Flash_Tower_ride.jpeg', delay: '0.5s', rating: 4.6, details: ['Ride Type: Tower Ride', 'Height Requirement: 48 inches', 'Duration: 1 minute'] },
        { title: 'Skyfall', para: 'Family-friendly roller coaster adventure.', image: '/public/image/Rides_Image/Skyfall_ride.jpeg', delay: '0.1s', rating: 4.4, details: ['Ride Type: Roller Coaster', 'Height Requirement: 42 inches', 'Duration: 3 minutes'] }
    ];

    const toggleModal = (ride) => {
        setSelectedRide(ride);
        setShowModal(!showModal);
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
                        {Ridess.map((attraction, index) => (
                            <div className={`col-lg-3 col-md-6 col-sm-12 wow bounceInUp`} data-wow-delay={attraction.delay} key={index}>
                                <div className="bg-light rounded service-item">
                                    <div className="service-content d-flex align-items-center justify-content-center p-4">
                                        <div className="service-content-icon text-center">
                                            <img src={attraction.image} alt={attraction.title} className="img-fluid mb-4" />
                                            <h4 className="mb-3">{attraction.title}</h4>
                                            <div className="d-flex justify-content-center mb-4">
                                                <i className="fas fa-star text-warning mr-1"></i>
                                                <span className="font-weight-bold">{attraction.rating}</span>
                                            </div>
                                            <p className="mb-4">{attraction.para}</p>
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
                                <img src={selectedRide?.image} alt={selectedRide?.title} className="img-fluid mb-4" />
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fas fa-star text-warning mr-1"></i>
                                    <span className="font-weight-bold">{selectedRide?.rating}</span>
                                    <span className="text-muted ml-2">(Reviews)</span>
                                </div>
                                <p>{selectedRide?.para}</p>
                                <h5 className="mb-3">Additional Details:</h5>
                                <ul>
                                    {selectedRide?.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
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

            {showFooter && <Footer />}
        </div>
    );
};

export default RidesAttract;