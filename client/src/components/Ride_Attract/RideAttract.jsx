import React, { useState } from 'react';
import '../style.css'
// import '../Ride_Attract/RideForm'
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

import axios from 'axios';
import { useEffect } from 'react';


const RidesAttract = ({ showNavbar = true, showFooter = true }) => {


    // ========fetch data dynamic=====
    const [Ridesdata, setRidesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/ShowRide')
            .then(result => setRidesData(result.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedRide, setSelectedRide] = useState(null);
    const Ridess = [
        {
            title: 'Deep Space',
            para: 'High-speed roller coaster thrill.',
            image: '/public/image/Rides_Image/Deep_Space_ride.jpeg',
            delay: '0.5s',
            rating: 4.8,
            details: ['Ride Type: Roller Coaster', 'Height Requirement: 48 inches', 'Duration: 2 minutes'],
            reviews: [
                { name: 'Harsh A', rating: 5, comment: 'Absolutely thrilling! Loved every second of it.' },
                { name: 'Laxit K', rating: 4, comment: 'Great ride, but a bit too intense for my liking.' },
                { name: 'Dhaval S', rating: 4.5, comment: 'Definitely worth a try. The speed is incredible!' },
            ],
        },
        {
            title: 'Cyclone',
            para: 'Classic roller coaster twists and turns.',
            image: '/public/image/Rides_Image/Cyclone_ride.jpeg',
            delay: '0.7s',
            rating: 4.5,
            details: ['Ride Type: Roller Coaster', 'Height Requirement: 42 inches', 'Duration: 3 minutes'],
            reviews: [
                { name: 'Rutvik P', rating: 4.5, comment: 'Loved the classic feel of this roller coaster. Great for all ages.' },
                { name: 'Harsh A', rating: 4, comment: 'The twists and turns were a bit too much for me, but still a fun ride.' },
                { name: 'Laxit K', rating: 5, comment: 'This is my new favorite ride! The adrenaline rush is unbeatable.' },
            ],
        },
        {
            title: 'Twister',
            para: 'Gentle roller coaster for kids.',
            image: '/public/image/Rides_Image/Twister_ride.jpeg',
            delay: '0.3s',
            rating: 4.2,
            details: ['Ride Type: Roller Coaster', 'Height Requirement: 36 inches', 'Duration: 4 minutes'],
            reviews: [
                { name: 'Dhaval S', rating: 4, comment: 'Perfect for my little ones. They had a blast on this ride.' },
                { name: 'Rutvik P', rating: 3.5, comment: 'A bit too tame for my liking, but great for families with young children.' },
                { name: 'Harsh A', rating: 4.5, comment: 'Gentle enough for my kids, but still fun for the whole family.' },
            ],
        },
        {
            title: 'Bumper Car',
            para: 'Classic bumper car fun and competition.',
            image: '/public/image/Rides_Image/bumpercar_card.jpg',
            delay: '0.5s',
            rating: 4.7,
            details: ['Ride Type: Bumper Cars', 'Height Requirement: None', 'Duration: 5 minutes'],
            reviews: [
                { name: 'Laxit K', rating: 4.5, comment: 'So much fun! Brings back childhood memories.' },
                { name: 'Harsh A', rating: 4, comment: 'Great for a quick adrenaline rush. Loved the competitive aspect.' },
                { name: 'Dhaval S', rating: 4.8, comment: 'Definitely a must-try ride. Lots of laughs and excitement.' },
            ],
        },
        {
            title: 'Butterfly Ride',
            para: 'Peaceful ride for families with young children.',
            image: '/public/image/Rides_Image/Butterfly_ride.jpeg',
            delay: '0.1s',
            rating: 4.3,
            details: ['Ride Type: Gentle Ride', 'Height Requirement: 32 inches', 'Duration: 6 minutes'],
            reviews: [
                { name: 'Aagam', rating: 4, comment: 'Perfect for my little ones. They loved the gentle swaying motion.' },
                { name: 'Laxit K', rating: 3.5, comment: 'A bit too tame for my taste, but great for families with young kids.' },
                { name: 'Rutvik P', rating: 4.2, comment: 'Relaxing and enjoyable. A nice break from the more thrilling rides.' },
            ],
        },
        {
            title: 'Lazy River',
            para: 'Relaxing float for a break from excitement.',
            image: '/public/image/Rides_Image/Lazy_river_ride.jpeg',
            delay: '0.7s',
            rating: 4.6,
            details: ['Ride Type: Water Ride', 'Height Requirement: None', 'Duration: 10 minutes'],
            reviews: [
                { name: 'Aagam', rating: 4.5, comment: 'So peaceful and relaxing. Perfect for a break between rides.' },
                { name: 'Rutvik P', rating: 4, comment: 'Loved floating along and taking in the sights. Great for all ages.' },
                { name: 'Dhaval S', rating: 4.8, comment: 'Definitely a must-try for anyone looking to unwind. Highly recommended!' },
            ],
        },
        {
            title: 'Wave Pool',
            para: 'Splash and play in the giant wave pool.',
            image: '/public/image/Rides_Image/Wavepool_ride.jpeg',
            delay: '0.1s',
            rating: 4.4,
            details: ['Ride Type: Water Ride', 'Height Requirement: 48 inches', 'Duration: 15 minutes'],
            reviews: [
                { name: 'Dhaval S', rating: 4.5, comment: 'So much fun! The waves are perfect for playing and splashing around.' },
                { name: 'Rutvik P', rating: 4, comment: 'Great for cooling off and having some water-based fun. Loved the energy.' },
                { name: 'Aagam', rating: 4.7, comment: 'Definitely a must-try for anyone who loves water rides. Lots of excitement!' },
            ],
        },
        {
            title: 'Pendulum Ride',
            para: 'Adrenaline-filled swing ride for weightlessness.',
            image: '/public/image/Rides_Image/Pendulum_ride.jpeg',
            delay: '0.3s',
            rating: 4.9,
            details: ['Ride Type: Swing Ride', 'Height Requirement: 48 inches', 'Duration: 2 minutes'],
            reviews: [
                { name: 'Laxit K', rating: 5, comment: 'Absolutely thrilling! The feeling of weightlessness is incredible.' },
                { name: 'Harsh A', rating: 4.5, comment: 'Not for the faint of heart, but definitely an adrenaline rush worth experiencing.' },
                { name: 'Dhaval S', rating: 4.8, comment: 'Loved the sensation of swinging high in the air. A must-try for thrill-seekers!' },
            ],
        },
        {
            title: 'Splash Water Ride',
            para: 'Wild water ride with splashing and spraying.',
            image: '/public/image/Rides_Image/Splash_ride.jpeg',
            delay: '0.5s',
            rating: 4.7,
            details: ['Ride Type: Water Ride', 'Height Requirement: 42 inches', 'Duration: 5 minutes'],
            reviews: [
                { name: 'Aagam', rating: 4.5, comment: 'So much fun! Prepare to get soaked, but its worth it.' },
                { name: 'Harsh A', rating: 4, comment: 'Great for cooling off on a hot day. Lots of splashing and excitement.' },
                { name: 'Laxit K', rating: 4.7, comment: 'Definitely a must-try for anyone who loves water rides. Lots of thrills!' },
            ],
        },
    ];

    console.log(Ridesdata.RideImage)

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
                        {Ridesdata.map((attraction, index) => (
                            <div className={`col-lg-3 col-md-6 col-sm-12 wow bounceInUp`} data-wow-delay={attraction.delay} key={index}>
                                <div className="bg-light rounded service-item">
                                    <div className="service-content d-flex align-items-center justify-content-center p-4">
                                        <div className="service-content-icon text-center">
                                            <img src={attraction.RideImage} alt="" className="img-fluid mb-4" />
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

                                <h5 className="mb-3">Reviews:</h5>
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
                                ))}
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

{/* {selectedRide && (
        <RideForm ride={selectedRide} onSubmit={() => setSelectedRide(null)} />
      )} */}

            {showFooter && <Footer />}
        </div>
    );
};

export default RidesAttract;