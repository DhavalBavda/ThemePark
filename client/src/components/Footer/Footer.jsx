import React, { useState } from 'react';
import './Carousel.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Maria Kate',
        profession: 'Photographer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
        rating: 4.5,
    },
    {
        name: 'John Doe',
        profession: 'Web Developer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
        rating: 4.0,
    },
    {
        name: 'Anna Deynah',
        profession: 'UX Designer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
        rating: 4.5,
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel">
                {testimonials.map((testimonial, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img className="avatar" src={testimonial.image} alt="avatar" />
                        <div className="carousel-content">
                            <h5 className="name">{testimonial.name}</h5>
                            <p className="profession">{testimonial.profession}</p>
                            <p className="text">
                                <span className="quote">“</span>
                                {testimonial.text}
                                <span className="quote">”</span>
                            </p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>&#9733;</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="control-prev" onClick={handlePrev}>
                &#9664;
            </button>
            <button className="control-next" onClick={handleNext}>
                &#9654;
            </button>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-send'>
                    <p className='footer-send-heading'>
                        Join the Adventure to the Park full of Rides
                    </p>
                    <p className='footer-send-text'>
                        Visit Us Now!!
                        Give Your Feedback
                    </p>
                    <div className="input-area">
                        <form>
                            <input type="text" name='Feedback' placeholder='Your Feedback' className='footer-input' />
                            <button type="submit" className="btn btn-primary">Send Feedback</button>
                        </form>
                    </div>
                </section>
                <div className="footer-link">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <div className="footer-icons">
                                <Link to='/'>
                                    <FaInstagram />
                                </Link>
                                <Link to='/'>
                                    <FaFacebook />
                                </Link>
                                <Link to='/'>
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const FooterApp = () => {
    return (
        <div>
            <Carousel />
            <Footer />
        </div>
    );
};

export default FooterApp;
